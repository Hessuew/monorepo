import imgBronze from '~/assets/images/bronze.webp';
import imgGold from '~/assets/images/gold_original.webp';
import imgSilver from '~/assets/images/silver.webp';
import { Marquee } from '~/components/magicui/marquee';
import { cn } from '~/lib/utils';
import { useMemo } from 'react';

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
  {
    name: 'adsJill',
    username: 's@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'adsJill',
    username: 's@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
];

const firstRow = reviews.slice(reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  index: number;
  name: string;
  username: string;
  body: string;
  bgStart?: number;
  columnIndex?: number;
}

const cardBgUrls = [imgGold.src, imgSilver.src, imgBronze.src];

function ReviewCard({ index, name, username, body, bgStart = 0, columnIndex = 0 }: ReviewCardProps) {
  // Generate a random background position for each card instance
  const backgroundPosition = useMemo(() => {
    const x = Math.floor(Math.random() * 80); // percent (avoid 100% for edge artifacts)
    const y = Math.floor(Math.random() * 80);
    return `${x}% ${y}%`;
  }, []);

  // Calculate background image index based on column
  const bgIdx =
    columnIndex === 0
      ? (index + bgStart) % 3 // First column: gold-silver-bronze (0-1-2)
      : (2 + index) % 3; // Second column: bronze-gold-silver (2-0-1)

  // Calculate size variation based on column
  const sizeVariation =
    columnIndex === 0
      ? 'h-[320px] sm:w-48' // First column standard size
      : 'h-[400px] sm:w-56'; // Second column slightly larger

  return (
    <figure
      className={cn(`relative w-fit cursor-pointer overflow-hidden rounded-xl border p-4 ${sizeVariation}`)}
      style={{
        backgroundImage: `url(${cardBgUrls[bgIdx]})`,
        color: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        backgroundPosition,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-row items-center gap-2'>
        {/* <img className='rounded-full' width='32' height='32' alt='' src={img} /> */}
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
    <div
      style={{
        clipPath: 'ellipse(640px 380px at 42% 40%)',
      }}
      className='relative bg-white/10 flex h-[720px] w-50 flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]'
    >
      <div
        className='flex flex-row items-center gap-4'
        style={{
          transform: 'translateX(-100px) translateY(0px) translateZ(0px) rotateX(20deg) rotateY(10deg) rotateZ(-30deg)',
        }}
      >
        <Marquee className='[--duration:20s]' vertical>
          {secondRow.map((review, index) => (
            <ReviewCard key={review.username + '-3'} {...review} index={index} bgStart={1} columnIndex={1} />
          ))}
        </Marquee>
        <Marquee vertical className='[--duration:20s]'>
          {firstRow.map((review, index) => (
            <ReviewCard key={review.username + '-0'} {...review} index={index} bgStart={0} columnIndex={0} />
          ))}
        </Marquee>
        <Marquee className='[--duration:20s]' vertical>
          {secondRow.map((review, index) => (
            <ReviewCard key={review.username + '-1'} {...review} index={index} bgStart={1} columnIndex={1} />
          ))}
        </Marquee>
        <Marquee vertical className='[--duration:20s]'>
          {thirdRow.map((review, index) => (
            <ReviewCard key={review.username + '-2'} {...review} index={index} bgStart={0} columnIndex={0} />
          ))}
        </Marquee>
      </div>

      <div className='pointer-events-none absolute inset-x-0 top-0 h-2/4 bg-gradient-to-b from-20% from-black'></div>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-30% from-black'></div>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-black'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black'></div>
    </div>
  );
}
