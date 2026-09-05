import { useTranslations } from '~/i18n/utils';
import React, { useEffect, useRef, useState } from 'react';

// Add CSS styles using template literal
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
` as const;

interface FilterContainerProps {
  textSearchPlaceholder: string;
  options: string[] | (string[] | string[][])[];
  allLabels: string[];
  showSearch?: boolean;
  gridId?: string;
  targetId?: string;
  lang: 'fi' | 'en';
}

export default function ReactFilterContainer({
  textSearchPlaceholder,
  options,
  allLabels,
  showSearch = true,
  gridId,
  targetId,
  lang,
}: FilterContainerProps) {
  const t = useTranslations(lang);
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all',
    search: '',
  });

  // Refs for scroll containers
  const typeScrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryScrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState({ type: false, category: false });
  const [showRightScroll, setShowRightScroll] = useState({ type: false, category: false });

  // Handle the complex options type
  const buttonGroups = Array.isArray(options[0]) ? (options as (string[] | string[][])[]) : [options as string[]];

  const labels = Array.isArray(allLabels) ? allLabels : [allLabels];

  const applyFilters = () => {
    const targetContainer = targetId ? document.getElementById(targetId) : document;
    if (!targetContainer) return;

    const itemCards = targetContainer.querySelectorAll('.item-card');
    const searchTerm = filters.search.toLowerCase();

    itemCards.forEach((card) => {
      const cardType = card.getAttribute('data-type');
      const cardCategory = card.getAttribute('data-category');
      const typeMatch = filters.type === 'all' || cardType === filters.type;
      const categoryMatch = filters.category === 'all' || cardCategory === filters.category;
      const cardContent = card.textContent?.toLowerCase() || '';
      const searchMatch = !searchTerm || cardContent.includes(searchTerm);

      card.classList.toggle('hidden', !searchMatch || !typeMatch || !categoryMatch);
    });

    // Hide empty year sections
    targetContainer.querySelectorAll('.item-year-card').forEach((yearSection) => {
      const hasVisibleCards = yearSection.querySelectorAll('.item-card:not(.hidden)').length > 0;
      yearSection.classList.toggle('hidden', !hasVisibleCards);
    });
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Update scroll indicators
  const updateScrollIndicators = (variant: 'type' | 'category') => {
    const container = variant === 'type' ? typeScrollContainerRef.current : categoryScrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    if (variant === 'type') {
      setShowLeftScroll((prev) => ({ ...prev, type: scrollLeft > 0 }));
      setShowRightScroll((prev) => ({ ...prev, type: scrollLeft < scrollWidth - clientWidth - 1 }));
    } else {
      setShowLeftScroll((prev) => ({ ...prev, category: scrollLeft > 0 }));
      setShowRightScroll((prev) => ({ ...prev, category: scrollLeft < scrollWidth - clientWidth - 1 }));
    }
  };

  // Scroll handlers
  const handleScroll = (direction: 'left' | 'right', variant: 'type' | 'category') => {
    const container = variant === 'type' ? typeScrollContainerRef.current : categoryScrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Setup scroll event listeners
  useEffect(() => {
    const typeContainer = typeScrollContainerRef.current;
    const categoryContainer = categoryScrollContainerRef.current;

    const handleTypeScroll = () => updateScrollIndicators('type');
    const handleCategoryScroll = () => updateScrollIndicators('category');
    const handleResize = () => {
      updateScrollIndicators('type');
      if (categoryContainer) updateScrollIndicators('category');
    };

    typeContainer?.addEventListener('scroll', handleTypeScroll);
    categoryContainer?.addEventListener('scroll', handleCategoryScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      typeContainer?.removeEventListener('scroll', handleTypeScroll);
      categoryContainer?.removeEventListener('scroll', handleCategoryScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFilterClick = (filterType: 'type' | 'category', value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: event.target.value }));
  };

  const buttonClass = 'rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap';
  const getHoverClass = (variant: 'type' | 'category') =>
    variant === 'type' ? 'hover:bg-blue-900' : 'hover:bg-gray-800';

  const typeOptions = Array.isArray(buttonGroups[0]) ? (buttonGroups[0] as string[]) : buttonGroups[0];

  const categoryOptions = buttonGroups[1] && Array.isArray(buttonGroups[1]) ? (buttonGroups[1] as string[]) : undefined;

  const ScrollButton = ({
    direction,
    variant,
    show,
  }: {
    direction: 'left' | 'right';
    variant: 'type' | 'category';
    show: boolean;
  }) => (
    <div
      className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-0 bottom-0 items-center ${show ? 'flex' : 'hidden'}`}
    >
      <button
        type='button'
        className='h-full px-3 flex items-center bg-page text-gray-300 hover:text-gray-100 z-10'
        onClick={() => handleScroll(direction, variant)}
        aria-label={`Scroll ${direction}`}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d={
              direction === 'left'
                ? 'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                : 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            }
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={`absolute ${direction === 'left' ? 'left-full' : 'right-full'} top-0 bottom-0 w-12 
          ${direction === 'left' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} 
          from-page to-transparent pointer-events-none`}
      />
    </div>
  );

  return (
    <div className='w-full' data-filter-root>
      <style>{styles}</style>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-wrap-reverse items-center gap-4'>
          <div className='flex-1 min-w-0'>
            <div className='relative'>
              <div className='overflow-x-auto hide-scrollbar' ref={typeScrollContainerRef} data-scroll-container>
                <div className='flex gap-2 min-w-max px-2' data-filter-buttons data-variant='type'>
                  <button
                    type='button'
                    className={`${buttonClass} ${getHoverClass('type')} ${
                      filters.type === 'all' ? 'text-white bg-blue-900' : 'bg-transparent'
                    }`}
                    onClick={() => handleFilterClick('type', 'all')}
                    data-filter='all'
                    data-filter-type='type'
                    data-selected={filters.type === 'all'}
                    aria-pressed={filters.type === 'all'}
                  >
                    {labels[0]}
                  </button>
                  {typeOptions?.map((option) => (
                    <button
                      key={option}
                      type='button'
                      className={`${buttonClass} ${getHoverClass('type')} ${
                        filters.type === option ? 'text-white bg-blue-900' : 'bg-transparent'
                      }`}
                      onClick={() => handleFilterClick('type', option)}
                      data-filter={option}
                      data-filter-type='type'
                      data-selected={filters.type === option}
                      aria-pressed={filters.type === option}
                      role='tab'
                    >
                      {t(option as keyof typeof t)}
                    </button>
                  ))}
                </div>
              </div>
              <ScrollButton direction='left' variant='type' show={showLeftScroll.type} />
              <ScrollButton direction='right' variant='type' show={showRightScroll.type} />
            </div>
          </div>
          {showSearch && (
            <div className='w-full md:w-auto md:min-w-[18.75rem]'>
              <div className='relative'>
                <input
                  id={gridId ? `${gridId}-quick-filter` : 'search-input'}
                  type='text'
                  className='w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder={textSearchPlaceholder}
                  value={filters.search}
                  onChange={handleSearch}
                  data-search-input
                />
              </div>
            </div>
          )}
        </div>
        {categoryOptions && (
          <div className='w-full'>
            <div className='relative'>
              <div className='overflow-x-auto hide-scrollbar' ref={categoryScrollContainerRef} data-scroll-container>
                <div className='flex gap-2 min-w-max px-2' data-filter-buttons data-variant='category'>
                  <button
                    type='button'
                    className={`${buttonClass} ${getHoverClass('category')} ${
                      filters.category === 'all' ? 'text-white bg-blue-900' : 'bg-transparent'
                    }`}
                    onClick={() => handleFilterClick('category', 'all')}
                    data-filter='all'
                    data-filter-type='category'
                    data-selected={filters.category === 'all'}
                    aria-pressed={filters.category === 'all'}
                  >
                    {labels[1]}
                  </button>
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      type='button'
                      className={`${buttonClass} ${getHoverClass('category')} ${
                        filters.category === option ? 'text-white bg-blue-900' : 'bg-transparent'
                      }`}
                      onClick={() => handleFilterClick('category', option)}
                      data-filter={option}
                      data-filter-type='category'
                      data-selected={filters.category === option}
                      aria-pressed={filters.category === option}
                      role='tab'
                    >
                      {t(option as keyof typeof t)}
                    </button>
                  ))}
                </div>
              </div>
              <ScrollButton direction='left' variant='category' show={showLeftScroll.category} />
              <ScrollButton direction='right' variant='category' show={showRightScroll.category} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
