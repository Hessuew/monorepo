import imgGold from '~/assets/images/rukous_seurakunta_gold_original.webp';
import { Marquee } from '~/components/magicui/marquee';
import { cn } from '~/lib/utils';

const ReviewCard = ({ name, body }: { img?: string; name: string; body: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-[352px] cursor-pointer overflow-hidden rounded-xl border p-4 xl:p-[16px] border-white/60',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
      style={{
        backgroundImage: `url(${imgGold.src})`,
        color: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-row items-center gap-2 xl:gap-[8px]'>
        <div className='min-h-8 min-w-8 xl:min-h-[32px] xl:min-w-[32px] 2xl:min-h-[48px] 2xl:min-w-[48px] rounded-full border border-slate-600' />
        {/* <img className='rounded-full' width='32' height='32' alt='' src={img || ''} /> */}

        <hr className='border-slate-600 my-4 xl:my-[16px]' />
        <div className='flex flex-col'>
          <figcaption className='text-sm xl:text-[14px] xl:leading-[20px] font-medium text-black'>{name}</figcaption>
          {/* <p className='text-xs font-medium dark:text-white/40'>{username}</p> */}
        </div>
      </div>
      <blockquote className='flex-auto bg-white/60 text-black text-sm xl:text-[14px] xl:leading-[20px] mt-2 xl:mt-[8px] self-baseline rounded-lg py-2 px-4 xl:py-[8px] xl:px-[16px]'>
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo({ reviews }: { reviews: { name: string; body: string }[] }) {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  // Calculate the width of a card plus gap to create a staggered effect
  // 352px is the width of the card, and we're using half of that for a nice offset
  const cardOffset = 352 / 2;

  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:40s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover initialOffset={cardOffset} className='[--duration:40s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#09183f]'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#09183f]'></div>
    </div>
  );
}
