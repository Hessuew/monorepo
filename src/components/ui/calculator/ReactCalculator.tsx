import { AlertOctagon } from '~/components/ui/icons/AlertOctagon';
import { AlertTriangle } from '~/components/ui/icons/AlertTriangle';
import { CircleCheck } from '~/components/ui/icons/CircleCheck';
import { LowFat } from '~/components/ui/icons/LowFat';
import { THRESHOLDS } from '~/data/thresholds';
import React, { useEffect, useRef, useState, type ChangeEvent } from 'react';

type Gender = 'male' | 'female';

interface CalculatorInputs {
  waist: string;
  height: string;
  gender: Gender;
}

interface ValidationErrors {
  waist: string;
  height: string;
}

const WAIST_LIMITS = {
  MIN: 30,
  MAX: 300,
};

const HEIGHT_LIMITS = {
  MIN: 50,
  MAX: 250,
};

export function ReactCalculator(): React.JSX.Element {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    waist: '',
    height: '',
    gender: 'male',
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    waist: '',
    height: '',
  });

  const [result, setResult] = useState<string>('0');
  const [showLine, setShowLine] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  function validateInput(name: keyof CalculatorInputs, value: string): string {
    if (name === 'gender') return '';

    const numValue = parseFloat(value);

    if (name === 'waist') {
      if (numValue < WAIST_LIMITS.MIN || numValue > WAIST_LIMITS.MAX) {
        return `Enter a valid waist (${WAIST_LIMITS.MIN}-${WAIST_LIMITS.MAX})`;
      }
    }
    if (name === 'height') {
      if (numValue < HEIGHT_LIMITS.MIN || numValue > HEIGHT_LIMITS.MAX) {
        return `Enter a valid height (${HEIGHT_LIMITS.MIN}-${HEIGHT_LIMITS.MAX})`;
      }
    }
    return '';
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    const error = validateInput(name as keyof CalculatorInputs, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    // Reset line animation state
    setShowLine(false);
    setLineWidth(0);

    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }

  function getResultColor(ratio: number): string {
    const thresholds = THRESHOLDS[inputs.gender];

    if (ratio < thresholds.low) return 'bg-purple-500';
    if (ratio <= thresholds.high) return 'bg-green-500';
    if (ratio <= thresholds.excess) return 'bg-yellow-500';
    return 'bg-red-500';
  }

  function getResultIcon(ratio: number): React.ReactNode {
    const thresholds = THRESHOLDS[inputs.gender];

    if (ratio < thresholds.low) return <LowFat color='#a855f7' />;
    if (ratio <= thresholds.high) return <CircleCheck color='#22c55e' />;
    if (ratio <= thresholds.excess) return <AlertTriangle color='#eab308' />;
    return <AlertOctagon color='#ef4444' />;
  }

  useEffect(() => {
    const waistNum = parseFloat(inputs.waist);
    const heightNum = parseFloat(inputs.height);

    if (!waistNum || !heightNum || errors.waist || errors.height) {
      setResult('0');
      setShowLine(false);
      setLineWidth(0);
      return;
    }

    const ratio = (waistNum / heightNum).toFixed(2);
    setResult(ratio);

    // Set timer for line animation
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setShowLine(true);
      // Start line width animation after showing the line
      requestAnimationFrame(() => {
        setLineWidth(100);
      });
    }, 500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inputs, errors]);

  return (
    <div>
      <fieldset
        className='flex justify-center gap-4 items-center pb-2 sm:pb-4'
        role='radiogroup'
        aria-label='Select gender'
      >
        <legend className='sr-only'>Select gender</legend>
        <div className='flex items-center'>
          <input
            type='radio'
            id='male'
            name='gender'
            value='male'
            checked={inputs.gender === 'male'}
            onChange={(e) => setInputs((prev) => ({ ...prev, gender: e.target.value as Gender }))}
            className='h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-600'
          />
          <label htmlFor='male' className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
            Male
          </label>
        </div>
        <div className='flex items-center'>
          <input
            type='radio'
            id='female'
            name='gender'
            value='female'
            checked={inputs.gender === 'female'}
            onChange={(e) => setInputs((prev) => ({ ...prev, gender: e.target.value as Gender }))}
            className='h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-600'
          />
          <label htmlFor='female' className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
            Female
          </label>
        </div>
      </fieldset>

      <div className='flex flex-col gap-6 p-4 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow sm:p-6 lg:p-8 w-full'>
        <div className='flex-row flex gap-2 sm:gap-4 md:gap-6 items-start'>
          <div className='w-24 sm:w-full relative'>
            <label htmlFor='waist' className='block text-sm font-medium'>
              Waist (cm)
            </label>
            {errors.waist && (
              <div className='absolute -top-6 left-0 right-0 px-2 py-1 rounded text-xs bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-200'>
                {errors.waist}
              </div>
            )}
            <input
              type='number'
              name='waist'
              id='waist'
              value={inputs.waist}
              onChange={handleInputChange}
              placeholder='0 cm'
              min='0'
              max='300'
              className='w-full py-3 pl-4 pr-2 block text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600'
              aria-describedby='waist-error'
            />
          </div>

          <p className='block font-medium text-2xl pt-7'>/</p>

          <div className='w-24 sm:w-full relative'>
            <label htmlFor='height' className='block text-sm font-medium'>
              Height (cm)
            </label>
            {errors.height && (
              <div className='absolute -top-6 left-0 right-0 px-2 py-1 rounded text-xs bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-200'>
                {errors.height}
              </div>
            )}
            <input
              type='number'
              name='height'
              id='height'
              value={inputs.height}
              onChange={handleInputChange}
              placeholder='0 cm'
              min='0'
              max='300'
              className='w-full py-3 pl-4 pr-2 block text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600'
              aria-describedby='height-error'
            />
          </div>

          <p className='block font-medium text-2xl pt-7'>=</p>

          <div className='w-24 sm:w-44 pt-8 relative'>
            <p className='block font-medium text-lg truncate'>{result}</p>
            {showLine && (
              <div className='absolute -bottom-2 left-0 right-0 h-2 w-10 overflow-hidden'>
                <div
                  className={`h-full transition-[width] duration-500 ease-out ${getResultColor(parseFloat(result))}`}
                  style={{ width: `${lineWidth}%` }}
                  aria-hidden='true'
                />
              </div>
            )}
            {showLine && result !== '0' && (
              <div
                className={`absolute -right-2 bottom-0.5 opacity-0 transition-opacity duration-500 ${lineWidth === 100 ? 'opacity-100' : ''}`}
                aria-hidden='true'
              >
                {getResultIcon(parseFloat(result))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
