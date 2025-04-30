import flameTheFreezeLogo from '~/assets/images/siteLogos/flameTheFreeze_logo.webp';
import prayerChurchLogo from '~/assets/images/siteLogos/prayerChurch_logo.webp';
import urFitChildLogo from '~/assets/images/siteLogos/urFitChild_logo.webp';
import { BlurFade } from '~/components/magicui/blur-fade';
import { Dock, DockIcon } from '~/components/magicui/dock';
import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Card data for each project
const projectData = {
  urFitChild: {
    color: 'white' as const,
    title: 'urFIT-child',
    description: 'For customers and groups reaching for global visibility.',
    price: '$5000',
    monthlyPrice: '$50',
    url: 'https://www.urfit-child.com',
    features: ['14 pages', '+150 materials', '+15 videos', 'Email subscription', 'Light dark mode', 'Premium hosting'],
  },
  flameTheFreeze: {
    color: 'purple' as const,
    title: 'Flame the Freeze',
    description: 'For customers and groups reaching for public visibility.',
    price: '$2000',
    monthlyPrice: '$25',
    url: 'https://www.flamethefreeze.com',
    features: ['8 pages', '+100 materials', '6 videos', 'Light dark mode', 'English and Finnish', 'Regular hosting'],
  },
  prayerChurch: {
    color: 'blue' as const,
    title: 'Prayer Church',
    description: 'For customers and groups reaching for local visibility.',
    price: '$1000',
    monthlyPrice: '$25',
    url: 'https://www.rukouksenseurakunta.fi',
    features: ['2 pages', '+20 materials', '3 videos', 'Testimonial section', 'English and Finnish', 'Regular hosting'],
  },
};

export function DockDemo(): React.JSX.Element {
  const [activeProject, setActiveProject] = useState<keyof typeof projectData>('urFitChild');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Initialize with urFitChild card visible
  useEffect(() => {
    setIsVisible(true);
  }, []);

  function handleProjectSelect(projectId: keyof typeof projectData): void {
    if (!isTransitioning && activeProject !== projectId) {
      // Start transition
      setIsTransitioning(true);

      // Fade out current card
      setIsVisible(false);

      // After fade out completes, change the project and fade in
      setTimeout(() => {
        setActiveProject(projectId);

        // Short delay before fading in the new card
        setTimeout(() => {
          setIsVisible(true);
          setIsTransitioning(false);
        }, 100);
      }, 300); // Match this with the transition duration
    }
  }

  // Get current project data
  // const currentProject = projectData[activeProject];

  return (
    <div className='relative'>
      <div className='hidden'>
        <Dock iconSize={80} iconMagnification={100} iconDistance={100}>
          <DockIcon onClick={() => handleProjectSelect('urFitChild')}>
            <img
              src={urFitChildLogo.src}
              className={`duration-300 size-full rounded-full ${activeProject === 'urFitChild' ? 'ring-2 ring-white/50' : ''}`}
            />
          </DockIcon>
          <DockIcon onClick={() => handleProjectSelect('flameTheFreeze')}>
            <img
              src={flameTheFreezeLogo.src}
              className={`duration-300 size-full rounded-full ${activeProject === 'flameTheFreeze' ? 'ring-2 ring-purple-500/50' : ''}`}
            />
          </DockIcon>
          <DockIcon onClick={() => handleProjectSelect('prayerChurch')}>
            <img
              src={prayerChurchLogo.src}
              className={`duration-300 size-full rounded-full ${activeProject === 'prayerChurch' ? 'ring-2 ring-blue-500/50' : ''}`}
            />
          </DockIcon>
        </Dock>
      </div>

      <div
        className={`flex flex-row gap-20 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
