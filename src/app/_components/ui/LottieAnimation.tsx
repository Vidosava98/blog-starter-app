'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
import animationData from '@/app/data/confetti.json';

export default function LottieAnimation({ copied }: { copied: boolean }) {
  return (
    <Lottie
      options={{
        loop: copied,      
        autoplay: copied,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />
  );
}
