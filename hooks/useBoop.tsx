'use client'

// hooks/useBoop.tsx from Josh Comeau's tutorial: https://www.joshwcomeau.com/react/boop/
import React from 'react';
import { useSpring, SpringValue } from 'react-spring';

type UseBoopProps = {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  springConfig?: {
    tension?: number;
    friction?: number;
  };
};

type BoopStyle = {
  transform: SpringValue<string>;
  display: SpringValue<string>;
  backfaceVisibility: SpringValue<string>;
};

export default function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}: UseBoopProps): [BoopStyle, () => void] {
  const [isBooped, setIsBooped] = React.useState(false);

  const style: BoopStyle = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,

    config: springConfig,
  });

  React.useEffect(() => {
    if (!isBooped) return;
    
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => window.clearTimeout(timeoutId);
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}