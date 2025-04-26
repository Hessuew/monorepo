import * as React from 'react';

const SvgFire = ({
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
      viewBox='0 0 16 16'
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
      <path
        fillRule='evenodd'
        d='M10.454 4.397c-.425-.947-1.263-1.941-2.558-3.005A24 24 0 0 0 6 0c0 .802-.127 1.528-.336 2.2-.419 1.346-1.167 2.472-1.878 3.543C2.862 7.133 2 8.43 2 10a6 6 0 0 0 12 0c0-.593-.093-1.175-.26-1.741a8.6 8.6 0 0 0-.958-2.09q-.156-.254-.328-.5c0 .844-.387 1.644-.952 2.321-.208.25-.44.483-.686.696a6.5 6.5 0 0 1-1.383.916c-.432.21-.63-.236-.285-.57l.006-.006q.579-.559.958-1.124c.485-.727.717-1.467.67-2.233a3.7 3.7 0 0 0-.328-1.272m1.534 5.917a8.4 8.4 0 0 1-1.682 1.087 2.4 2.4 0 0 1-1.607.194 2.23 2.23 0 0 1-1.505-1.212c-.547-1.144-.01-2.234.564-2.79 1.095-1.057 1.11-1.671.96-2.144-.147-.467-.55-1.104-1.408-1.912C6.8 4.82 6.1 5.877 5.522 6.744l-.07.105C4.455 8.35 4 9.14 4 10a4 4 0 0 0 7.988.314'
      />
    </svg>
  </>
);

export default SvgFire;
