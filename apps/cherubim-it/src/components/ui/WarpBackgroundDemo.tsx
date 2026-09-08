import { WarpBackground } from '~/components/magicui/warp-background';

export function WarpBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <WarpBackground beamSize={0.5} beamsPerSide={20} gridColor='rgba(255, 255, 255, 0.0)'>
      {children}
    </WarpBackground>
  );
}
