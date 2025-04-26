import * as React from 'react';

interface SvgGiftProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  gradientId?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const SvgGift = ({
  size = 48,
  gradientId = 'fireGradient',
  gradientFrom = '#1a0024',
  gradientTo = 'rgba(255, 170, 64)',
  ...props
}: SvgGiftProps) => (
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
    <path d='M19 8h-2.352c.219-.457.352-.961.352-1.5C17 4.57 15.43 3 13.5 3c-.979 0-1.864.407-2.5 1.058A3.5 3.5 0 0 0 8.5 3C6.57 3 5 4.57 5 6.5c0 .539.133 1.043.352 1.5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v5c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-1 4h-5v-2h5zm-8-5h2v1h-2zm2 3v2h-2v-2zm1.5-5c.827 0 1.5.673 1.5 1.5S14.327 8 13.5 8a1.4 1.4 0 0 1-.5-.097V7a.99.99 0 0 0-.913-.982A1.5 1.5 0 0 1 13.5 5M7 6.5C7 5.673 7.673 5 8.5 5c.657 0 1.211.428 1.413 1.018A.99.99 0 0 0 9 7v.903A1.4 1.4 0 0 1 8.5 8C7.673 8 7 7.327 7 6.5M9 10v2H4v-2zM6 20c-.551 0-1-.449-1-1v-6h4v7zm4 0v-7h2v7zm6 0h-3v-7h4v6c0 .551-.449 1-1 1' />
  </svg>
);

export default SvgGift;
