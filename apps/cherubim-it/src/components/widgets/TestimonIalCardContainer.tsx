import imgGold2 from '~/assets/images/gold_original.webp';
import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.JSX.Element[];
};

export default function TestimonialCardContainer({ children }: Props) {
  // Initial collapsed height in pixels
  const initialHeight = 800;
  // Height increment for each expansion in pixels
  const heightIncrement = 500;

  // Use useRef for initial state to avoid hydration mismatch
  const [currentHeight, setCurrentHeight] = useState<number>(initialHeight);
  const [hasOverflow, setHasOverflow] = useState(false); // Start with false to match server rendering
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Start with false to match server rendering
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if we're on the client

  // Set isClient to true once component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if content overflows the container
  const checkOverflow = (): void => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;

      // Set overflow state based on content vs current container height
      // Content has overflow if its height is greater than our current set height
      const hasContentOverflow = contentHeight > currentHeight;

      // If overflow status changes to false, don't immediately update state
      // This allows time for the animation to complete
      if (!hasContentOverflow && hasOverflow) {
        // Start the fade-out animation by keeping hasOverflow true but updating button visibility
        setIsButtonVisible(false);

        // After animation completes, update the actual overflow state
        setTimeout(() => {
          setHasOverflow(false);
        }, 500); // Match this with the CSS transition duration
      } else if (hasContentOverflow && !hasOverflow) {
        // If content now has overflow but state doesn't reflect it,
        // update both states immediately to show the button
        setHasOverflow(true);
        setIsButtonVisible(true);
      } else if (hasContentOverflow && hasOverflow) {
        // Make sure button is visible if there's overflow
        setIsButtonVisible(true);
      }
    }
  };

  // Run overflow check on mount and when height changes
  useEffect(() => {
    // Only run on client-side
    if (!isClient) return;

    // Initial check
    checkOverflow();

    // Re-check on window resize
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [currentHeight, hasOverflow, isClient]);

  // Force an initial check after component fully renders
  useEffect(() => {
    // Only run on client-side
    if (!isClient) return;

    // Use a small timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      checkOverflow();
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  const expandMore = (): void => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;

      // Increase height by increment, but don't exceed content height
      const newHeight = Math.min(currentHeight + heightIncrement, contentHeight);

      // Force a re-render by creating a new state value
      setCurrentHeight(newHeight);
    }
  };

  return (
    <div className='relative'>
      <div
        ref={containerRef}
        className='relative overflow-hidden transition-all duration-500 ease-in-out pb-12'
        style={{
          height: `${currentHeight}px`, // Use height instead of maxHeight
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>

      {/* Gradient overlay when content has overflow - only show on client */}
      {isClient && hasOverflow && (
        <div
          className={`absolute bottom-12 left-0 right-0 h-60 bg-gradient-to-b from-transparent dark:from-transparent to-[#09183f] dark:to-[#09183f] pointer-events-none transition-opacity duration-500 ease-in-out ${
            isButtonVisible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden='true'
        />
      )}

      {/* Expand button - shown only when content has overflow and on client */}
      {isClient && hasOverflow && (
        <div
          className={`flex justify-center mt-4 z-10 transition-all duration-500 ease-in-out ${
            isButtonVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
        >
          {/* Button wrapper with gold background */}
          <div
            className='relative rounded-full p-0.5'
            style={{
              backgroundImage: `url(${imgGold2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <button
              onClick={expandMore}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className='flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              style={{
                backgroundColor: isHovered ? 'white' : '#09183f',
                color: isHovered ? 'black' : 'white',
              }}
              aria-expanded={!hasOverflow}
              aria-controls='testimonial-content'
            >
              <span>Näytä lisää</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
