import { useState, useEffect } from 'react'

interface FormState {
  email: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  isVisible: boolean;
}

export default function ReactSubscribeForm() {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    status: 'idle',
    message: '',
    isVisible: false
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (formState.status === 'success' || formState.status === 'error') {
      // Show message with fade in
      setFormState(prev => ({ ...prev, isVisible: true }));
      
      // Start fade out after 3 seconds
      timer = setTimeout(() => {
        setFormState(prev => ({ ...prev, isVisible: false }));
        
        // Reset status after fade out animation completes
        setTimeout(() => {
          setFormState(prev => ({ ...prev, status: 'idle', message: '' }));
        }, 300); // Match this with CSS transition duration
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [formState.status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, status: 'loading' }));

    try {
      const workerUrl = import.meta.env.DEV 
        ? 'http://localhost:8787/subscribe'
        : 'https://subscribe.urfit-child.dev/subscribe';
        
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formState.email }),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState(prev => ({
          ...prev,
          status: 'success',
          message: 'Successfully subscribed to updates!',
          email: ''
        }));
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error: unknown) {
      console.log(error)
      setFormState(prev => ({
        ...prev,
        status: 'error',
        message: error instanceof Error ? error.message : 'An error occurred'
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 md:max-w-[300px]">
      <div className="relative">
        {formState.message && (
          <div
            className={`transition-all duration-300 absolute -top-12 left-0 right-0 px-3 py-2 rounded-md text-sm ${
              formState.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            } ${
              formState.status === 'success'
                ? 'bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-200'
                : formState.status === 'error'
                ? 'bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-200'
                : ''
            }`}
            role="alert"
            aria-live="polite"
          >
            {formState.message}
          </div>
        )}
        <div className="flex">
          <input
            type="email"
            value={formState.email}
            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Subscribe to updates"
            className="w-full md:min-w-[300px] px-4 pr-24 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-300"
            required
            aria-label="Email subscription"
            disabled={formState.status === 'loading'}
          />
          <button
            type="submit"
            disabled={formState.status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[80px] px-3 py-1 text-sm text-gray-600 bg-white/95 backdrop-blur-sm rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:opacity-50 transition-colors dark:bg-gray-800/95 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {formState.status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </form>
  )
}
