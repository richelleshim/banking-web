"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp decimal="." prefix="$" duration={2.75} decimals={2} end={amount} />
  );
};

export default AnimatedCounter;
