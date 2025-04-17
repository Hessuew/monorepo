import imgGold from '~/assets/images/gold_original.webp';
import { Marquee } from '~/components/magicui/marquee';
import { cn } from '~/lib/utils';
import React, { useMemo } from 'react';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
  goldImageUrl: string;
}

function ReviewCard({ img, name, username, body, goldImageUrl }: ReviewCardProps) {
  // Generate a random background position for each card instance
  const backgroundPosition = useMemo(() => {
    const x = Math.floor(Math.random() * 80); // percent (avoid 100% for edge artifacts)
    const y = Math.floor(Math.random() * 80);
    return `${x}% ${y}%`;
  }, []);

  return (
    <figure
      className={cn('relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4')}
      style={{
        backgroundImage: `url(${goldImageUrl})`,
        color: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        backgroundPosition,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>{name}</figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{body}</blockquote>
    </figure>
  );
}

export function MarqueeDemo() {
  return (
    <div className='relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]'>
      <div
        className='flex flex-row items-center gap-4'
        style={{
          transform:
            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        <Marquee vertical className='[--duration:20s]'>
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} goldImageUrl={imgGold.src} />
          ))}
        </Marquee>
        <Marquee className='[--duration:20s]' vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} goldImageUrl={imgGold.src} />
          ))}
        </Marquee>
        <Marquee className='[--duration:20s]' vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} goldImageUrl={imgGold.src} />
          ))}
        </Marquee>
        <Marquee className='[--duration:20s]' vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} goldImageUrl={imgGold.src} />
          ))}
        </Marquee>
      </div>

      <div className='pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background'></div>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  );
}
