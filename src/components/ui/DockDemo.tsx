import flameTheFreezeLogo from '~/assets/images/siteLogos/flameTheFreeze_logo.webp';
import prayerChurchLogo from '~/assets/images/siteLogos/prayerChurch_logo.webp';
import urFitChildLogo from '~/assets/images/siteLogos/urFitChild_logo.webp';
import { BlurFade } from '~/components/magicui/blur-fade';
import { Dock, DockIcon } from '~/components/magicui/dock';
import { projects } from '~/data/projects';
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo(): React.JSX.Element {
  // For BlurFade, inView=true means the component is hidden (due to isInView = !inView in BlurFade)
  // So we want isAnimating to be false for the card to be visible
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<string>('urFitChild');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  function handleProjectSelect(projectId: string): void {
    if (!isTransitioning) {
      // Start transition
      setIsTransitioning(true);

      // Hide the current card
      setIsAnimating(true);

      // After a short delay, update the project and show the new card
      setTimeout(() => {
        if (activeProject !== projectId) {
          setActiveProject(projectId);
        }

        // Show the card again
        setTimeout(() => {
          setIsAnimating(false);
          setIsTransitioning(false);
        }, 100);
      }, 400);
    }
  }

  return (
    <div className='relative'>
      <Dock iconSize={80} iconMagnification={100} iconDistance={100}>
        <DockIcon onClick={() => handleProjectSelect('urFitChild')}>
          <img src={urFitChildLogo.src} className='size-full rounded-full' />
        </DockIcon>
        <DockIcon onClick={() => handleProjectSelect('flameTheFreeze')}>
          <img src={flameTheFreezeLogo.src} className='size-full rounded-full' />
        </DockIcon>
        <DockIcon onClick={() => handleProjectSelect('prayerChurch')}>
          <img src={prayerChurchLogo.src} className='size-full rounded-full' />
        </DockIcon>
      </Dock>

      <section id='header' className='mt-8 min-h-[320px]'>
        <BlurFade delay={0.1} inView={isAnimating} duration={0.3}>
          <ProjectCard
            key={projects[activeProject].id}
            title={projects[activeProject].title}
            description={projects[activeProject].description}
            size={projects[activeProject].size}
            url={projects[activeProject].url}
          />
        </BlurFade>
      </section>
    </div>
  );
}
