'use client'

// components/Boop.jsx
import { ReactNode } from 'react';
import { animated } from 'react-spring';
import useBoop from '@/hooks/useBoop';

const Boop = ({ children, ...boopConfig }: { children: ReactNode; [key: string]: unknown }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onMouseEnter={trigger} style={style as any}>
      {children}
    </animated.span>
  );
};

export default Boop;