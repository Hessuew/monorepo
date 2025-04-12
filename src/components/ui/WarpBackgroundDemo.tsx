import { WarpBackground } from '~/components/magicui/warp-background';

export function WarpBackgroundDemo({ children }: { children: React.ReactNode }) {
  return <WarpBackground gridColor='rgba(255, 255, 255, 0.2)'>{children}</WarpBackground>;
}
