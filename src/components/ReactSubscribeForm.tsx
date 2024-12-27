import { useState } from 'react'

export default function ReactSubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const workerUrl = import.meta.env.DEV 
        ? 'http://localhost:8787/subscribe'
        : 'https://subscribe.urfit-child.dev/subscribe';
        
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Successfully subscribed to updates!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'Failed to subscribe')
      }
    } catch (error: unknown) {
      console.log(error)
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 md:max-w-[300px]">
      <div className="relative">
        {message && (
          <div
            className={`absolute -top-12 left-0 right-0 px-3 py-2 rounded-md text-sm transition-all duration-200 opacity-100 ${
              status === 'success'
                ? 'bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-200'
                : 'bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-200'
            }`}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>
        )}
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Subscribe to updates"
            className="w-full md:min-w-[300px] px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-300"
            required
            aria-label="Email subscription"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-gray-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:opacity-50 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Subscribe"
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </form>
  )
}
