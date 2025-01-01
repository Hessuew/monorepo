import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
}

export function AlertOctagon({ color = 'currentColor', size = 24 }: IconProps): React.JSX.Element {
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
      <path d='M12 8v4' />
      <path d='M12 16h.01' />
      <path d='M11.235 2.317a2 2 0 0 1 1.53 0l5.54 2.295a2 2 0 0 1 1.083 1.082l2.295 5.54a2 2 0 0 1 0 1.531l-2.295 5.54a2 2 0 0 1-1.082 1.083l-5.54 2.295a2 2 0 0 1-1.531 0l-5.54-2.295a2 2 0 0 1-1.083-1.082l-2.295-5.54a2 2 0 0 1 0-1.531l2.295-5.54a2 2 0 0 1 1.082-1.083z' />
    </svg>
  );
}
