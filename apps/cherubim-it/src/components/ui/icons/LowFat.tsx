import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
}

export function LowFat({ color = 'currentColor', size = 24 }: IconProps): React.JSX.Element {
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
      <circle cx='12' cy='4' r='2.5' />
      <path d='M12 7v13' />
      <path d='M7 17l5 5l5 -5' />
    </svg>
  );
}
