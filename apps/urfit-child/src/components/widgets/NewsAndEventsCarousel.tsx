import React, { useState } from 'react';

interface SlideImage {
  src: string;
  width?: number;
  height?: number;
  format?: string;
}

export interface NewsAndEventsCarouselProps {
  caption: string;
  images: (SlideImage | string)[];
  eager?: boolean;
}

export function NewsAndEventsCarousel({
  caption,
  images,
  eager = false,
}: NewsAndEventsCarouselProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className='aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800' />;
  }

  const hasMultiple = images.length > 1;

  function showPrev(): void {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function showNext(): void {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div
      className='relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800'
      role={hasMultiple ? 'region' : undefined}
      aria-roledescription={hasMultiple ? 'carousel' : undefined}
      aria-label={hasMultiple ? `Photo gallery for ${caption}` : undefined}
    >
      {images.map((image, index) => {
        const src = typeof image === 'string' ? image : image.src;
        const isActive = index === currentIndex;
        const alt = hasMultiple ? `${caption} - Photo ${index + 1} of ${images.length}` : caption;

        return (
          <div
            key={`${src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-300 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
            role={hasMultiple ? 'group' : undefined}
            aria-roledescription={hasMultiple ? 'slide' : undefined}
            aria-label={hasMultiple ? `${index + 1} of ${images.length}` : undefined}
            aria-hidden={!isActive}
          >
            <img
              src={src}
              alt={alt}
              className='h-full w-full object-cover object-center'
              loading={eager && index === 0 ? 'eager' : 'lazy'}
              decoding='async'
            />
          </div>
        );
      })}

      {hasMultiple && (
        <>
          <button
            type='button'
            onClick={showPrev}
            aria-label='Previous photo'
            className='absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2.5'
              aria-hidden='true'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
            </svg>
          </button>
          <button
            type='button'
            onClick={showNext}
            aria-label='Next photo'
            className='absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2.5'
              aria-hidden='true'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
            </svg>
          </button>
          <div
            className='absolute bottom-3 right-3 z-20 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm'
            aria-live='polite'
          >
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
