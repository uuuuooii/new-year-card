import React from "react";
import Lottie from "lottie-react";
import congratsAnimation from "./congratsAnimation.json";

const CongratsLottie = () => {
  return (
    <Lottie
      loop={false}
      width={144}
      height={144}
      animationData={congratsAnimation}
    />
  );
};

export default CongratsLottie;
