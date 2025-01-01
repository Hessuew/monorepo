import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
}

export function AlertTriangle({ color = 'currentColor', size = 24 }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 9v4' />
      <path d='M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z' />
      <path d='M12 16h.01' />
    </svg>
  );
}
