'use client';

import React, { useState, FunctionComponent } from 'react';
import CountUp from 'react-countup';
import { useVisibility } from './usevisibility';
import mergeRefs from './usevisibility/mergeRefs';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export const Counter: FunctionComponent<CounterProps> = ({
  end,
  suffix,
  delay,
  duration,
}) => {
  const [ref, isVisible] = useVisibility({ threshold: 0.1 });
  const [viewPortEntered, setViewPortEntered] = useState(false);

  if (isVisible && !viewPortEntered) {
    setViewPortEntered(true);
  }

  return (
    <CountUp
      suffix={suffix}
      end={end}
      delay={delay}
      duration={duration}
      start={viewPortEntered ? undefined : 0}
    >
      {({ countUpRef }) => <span ref={mergeRefs(ref, countUpRef)} />}
    </CountUp>
  );
};
