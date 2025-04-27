import b1 from '~/assets/videos/frame_blue.mp4';
import p1 from '~/assets/videos/frame_purple.mp4';
import w1 from '~/assets/videos/frame_white.mp4';
import { ExternalLink } from 'lucide-react';

type FeaturesCardProps = {
  title: string;
  description: string;
  price: string;
  monthlyPrice: string;
  features: string[];
  url: string;
  color: 'white' | 'purple' | 'blue';
};

function Checkmark() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      data-name='Line Color'
      xmlns='http://www.w3.org/2000/svg'
      className='icon line-color'
    >
      <path
        style={{
          fill: 'none',
          stroke: 'white',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
        d='m5 12 5 5 9-9'
      />
    </svg>
  );
}

export default function FeaturesCard({
  title,
  description,
  price,
  monthlyPrice,
  features,
  url,
  color,
}: FeaturesCardProps) {
  // Get gradient colors based on the card color
  const getGradientColor = (opacity: number): string => {
    if (color === 'white') return `rgba(255, 255, 255, ${opacity})`;
    if (color === 'purple') return `rgba(168, 85, 247, ${opacity})`;
    return `rgba(59, 130, 246, ${opacity})`;
  };

  // Get border class based on card color
  const getBorderClass = (): string => {
    if (color === 'white') return 'gradient-border';
    if (color === 'purple') return 'gradient-border2';
    return 'gradient-border3';
  };

  const getCardContainerClass = (): string => {
    if (color === 'white') return 'card-container';
    if (color === 'purple') return 'card-container2';
    return 'card-container3';
  };

  return (
    <section id='header' className='mt-16 min-h-[320px]'>
      {/* Card container with glow effect */}
      <div className='relative bg-black rounded-[24px] w-[390px] md:w-[366px] sm:w-[91%] sm:max-w-[366px] xs:w-[288px]'>
        <div className={`${getCardContainerClass()} absolute top-0 left-0 w-full h-full -z-10`}></div>

        {/* Actual card content */}
        <div
          className={`${getBorderClass()} item overflow-visible relative flex aspect-[0.7372] flex-shrink-0 flex-col rounded-[24px] p-[28px] pb-[25px] text-white transition-all duration-500 sm:p-[18px]`}
        >
          {/* Gradient background overlay */}
          <div
            className='absolute inset-0 rounded-[24px] -z-5'
            style={{
              background: `
                radial-gradient(circle at 15% 15%, ${getGradientColor(0.2)} 0%, transparent 40%),
                radial-gradient(circle at 85% 85%, ${getGradientColor(0.2)} 0%, transparent 40%),
                linear-gradient(to bottom right, ${getGradientColor(0.05)} 0%, transparent 100%, ${getGradientColor(0.05)} 100%)
              `,
            }}
          ></div>
          {/* <video
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[600px] object-fill max-w-none -z-10'
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            aria-hidden='true'
          >
            <source src={color === 'white' ? w1 : color === 'purple' ? p1 : b1} type='video/mp4' />
          </video> */}
          <div className='relative z-10'>
            <h3 className='text-20 font-semibold leading-snug tracking-tight sm:text-[20px]'>{title}</h3>
            <p className='mt-2.5 leading-snug'>
              <span className='text-[64px] font-semibold tracking-tight lg:text-[56px] md:text-[48px] sm:text-[64px] pr-4'>
                {price},
              </span>
              <span className='text-20 font-semibold tracking-tight text-white sm:text-[40px]'>{monthlyPrice}</span>
              <span className='text-20 font-medium tracking-tight text-muted sm:text-[20px]'>/monthly</span>
            </p>
            <p className='mt-1 pr-3 text-[18px] leading-snug -tracking-[0.03em] md:mt-2 sm:pr-0 sm:text-[18px]'>
              {description}
            </p>
            <span className='mt-[18px] block h-px bg-[rgba(255,255,255,0.10)] sm:mt-4' aria-hidden='true'></span>
            <ul className='mt-6 flex flex-col gap-y-4 lg:mt-8 md:mt-7 sm:mt-4 sm:gap-y-3'>
              <li className='flex items-center gap-x-2 text-[18px] leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-[18px] sm:tracking-tight'>
                {features[0]}
              </li>
              <li className='flex items-center gap-x-2 text-[18px] leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight'>
                {features[1]}
              </li>
              <li className='flex items-center gap-x-2 text-[18px] leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight'>
                {features[2]}
              </li>
              <li className='flex items-center gap-x-2 text-[18px] leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight'>
                <Checkmark />
                {features[3]}
              </li>
              <li className='flex items-center gap-x-2 text-[18px] leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight'>
                <Checkmark />
                {features[4]}
              </li>
              <li className='flex items-center gap-x-2 text-[18px] leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight'>
                <Checkmark />
                {features[5]}
              </li>
            </ul>
          </div>

          {/* URL positioned at the bottom of the card */}
          <div className='absolute bottom-[25px] left-[28px] right-[28px] sm:bottom-[18px] sm:left-[18px] sm:right-[18px]'>
            <a
              href={url}
              className='flex justify-center items-center gap-1.5 text-blue-600 hover:text-blue-400 transition-colors group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='border-b border-current opacity-80 group-hover:opacity-100'>
                {url.replace('https://www.', '')}
              </span>
              <ExternalLink className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
