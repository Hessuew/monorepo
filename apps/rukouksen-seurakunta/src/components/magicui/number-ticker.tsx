'use client';

import imgGold from '~/assets/images/rukous_seurakunta_gold_small.webp';
import { cn } from '~/lib/utils';
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';

const defaultBackgroundStyles = {
  backgroundImage: `url(${imgGold.src})`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'local', // Ensures the background stays with the text
  backgroundPosition: '10% 80%', // Moves it slightly down
};

const styleStyle = {
  backgroundAttachment: 'local',
  backgroundRepeat: 'repeat',
  backgroundSize: '300% 100%',
  backgroundPosition: '0% 10%',
};

// Merge default styles with custom styles
const commonStyles = {
  ...defaultBackgroundStyles,
  ...styleStyle,
};

interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
  value: number;
  startValue?: number;
  direction?: 'up' | 'down';
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? startValue : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction, startValue]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces]
  );

  return (
    <span
      ref={ref}
      className={cn('inline-block tabular-nums tracking-wider text-primary', className)}
      {...props}
      style={commonStyles}
    >
      {startValue}
    </span>
  );
}
