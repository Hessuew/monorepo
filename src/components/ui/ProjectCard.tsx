import { ShineBorder } from '~/components/magicui/shine-border';
import { cn } from '~/lib/utils';
import { ExternalLink } from 'lucide-react';
import { MagicCard } from '../magicui/magic-card';

interface ProjectCardProps {
  title: string;
  description: string;
  size: string;
  url: string;
}

export function ProjectCard({ title, description, size, url }: ProjectCardProps) {
  return (
    <MagicCard
    // gradientColor={'rgba(156, 64, 255, 0.7)'}
    // gradientOpacity={0.2}
    // // gradientColor={'#D9D9D955'}
    // className='p-0 rounded-xl'
    >
      <div
        className={cn(
          'flex w-[470px] h-[320px] relative overflow-hidden rounded-xl border border-gray-700/50 bg-black/20 transition-all duration-500 hover:border-gray-600'
        )}
      >
        <ShineBorder borderWidth={2} duration={8} shineColor={['#ffaa40', '#9c40ff', '#4095ff']} />

        <div className='card-content p-9 relative z-10'>
          <h2 className='text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#4095ff] bg-clip-text text-transparent'>
            {title}
          </h2>
          <p className='text-muted text-sm mb-6 leading-relaxed'>{description}</p>

          <div className='mt-auto absolute bottom-9 left-9 right-9'>
            <div className='flex justify-between items-center border-t border-gray-800 pt-4'>
              <h3>
                <span className='font-semibold text-gray-400'>Size: </span>
                <span className='text-gray-300'>{size}</span>
              </h3>

              <a
                href={url}
                className='flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors group'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>{url.replace('https://www.', '')}</span>
                <ExternalLink className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  );
}
