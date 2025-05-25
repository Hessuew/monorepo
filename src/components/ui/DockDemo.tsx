import { BlurFade } from '~/components/magicui/blur-fade';
import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Card data for each project
const projectData = {
  urFitChild: {
    color: 'white' as const,
    title: 'urFIT-child',
    description: 'Helping customers and groups expand their reach worldwide.',
    price: '$5000',
    monthlyPrice: '$50',
    url: 'https://www.urfit-child.com',
    features: ['14 pages', '+200 materials', '+15 videos', 'Email subscription', 'Light dark mode', 'Premium hosting'],
  },
  flameTheFreeze: {
    color: 'purple' as const,
    title: 'Flame the Freeze',
    description: 'Enabling broader public recognition and awareness.',
    price: '$2000',
    monthlyPrice: '$25',
    url: 'https://www.flamethefreeze.com',
    features: ['8 pages', '+100 materials', '6 videos', 'English and Finnish', 'Light dark mode', 'Regular hosting'],
  },
  prayerChurch: {
    color: 'blue' as const,
    title: 'Prayer Church',
    description: 'Boosting presence and impact within your local community.',
    price: '$1000',
    monthlyPrice: '$25',
    url: 'https://www.rukouksenseurakunta.fi',
    features: ['2 pages', '+32 materials', '6 videos', 'English and Finnish', 'Testimonial section', 'Regular hosting'],
  },
};

export function DockDemo(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Initialize with urFitChild card visible
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='relative'>
      <div
        className={`flex flex-col xl:flex-row gap-8 xl:gap-[128px] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <BlurFade delay={0.1} inView duration={0.3}>
          <FeaturesCard {...projectData.urFitChild} />
        </BlurFade>
        <BlurFade delay={0.2} inView duration={0.3}>
          <FeaturesCard {...projectData.flameTheFreeze} />
        </BlurFade>
        <BlurFade delay={0.3} inView duration={0.3}>
          <FeaturesCard {...projectData.prayerChurch} />
        </BlurFade>
      </div>
    </div>
  );
}
