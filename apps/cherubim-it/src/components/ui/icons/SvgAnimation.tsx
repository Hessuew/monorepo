import * as React from 'react';

const SvgAnimation = ({
  size = 48,
  gradientId = 'fireGradient',
  gradientFrom = '#1a0024',
  gradientTo = 'rgba(255, 170, 64)',
  ...props
}) => (
  <>
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill={`url(#${gradientId})`}
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor={gradientFrom} />
          <stop offset='100%' stopColor={gradientTo} />
        </linearGradient>
      </defs>
      <path d='M22 13v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1M7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v-6.5a.5.5 0 0 1 .5-.5H17V7a1 1 0 0 0-1-1Zm-4 7h1V4.5a.5.5 0 0 1 .5-.5H13V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1' />
    </svg>
  </>
);

export default SvgAnimation;
