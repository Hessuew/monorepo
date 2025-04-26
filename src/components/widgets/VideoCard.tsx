import React, { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';

interface VideoCardProps {
  videoSrc: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  iconName: string;
}

export const VideoCard: FC<VideoCardProps> = ({ videoSrc, thumbnailSrc, title, description, iconName }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Handle keyboard focus for accessibility
  const handleFocus = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleBlur = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Reset video when src changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <div className="w-full rounded-3xl bg-transparent">
      <div 
        className="relative rounded-3xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
      >
        {/* Video element */}
        <video 
          ref={videoRef}
          src={videoSrc} 
          muted 
          playsInline
          loop
          className="rounded-3xl w-full"
        />
        
        {/* Thumbnail overlay */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            isHovering ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img 
            src={thumbnailSrc} 
            alt={`Thumbnail for ${title}`} 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      
      {/* Content below video */}
      <div className="pt-6 pl-4">
        {/* We'll let Astro handle the icon rendering */}
        <div className="w-12 h-12" data-icon-name={iconName}></div>

        <h3 className="mt-5 font-title text-black max-w-28 text-[20px] leading-none tracking-tighter lg:mt-4 lg:max-w-full lg:text-[28px] md:mt-3.5 sm:mt-2.5 sm:max-w-32 sm:text-[24px]">
          {title}
        </h3>
        
        <p className="mt-3.5 text-black text-[15px] font-medium leading-snug tracking-tighter lg:mt-2.5 md:mt-2 md:leading-tight sm:mt-1 max-w-none sm:max-w-[284px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
