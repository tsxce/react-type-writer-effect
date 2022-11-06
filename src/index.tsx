import React, { useState, useEffect } from "react";
import TypingEffect from "./component/TypingEffect";

interface TypingEffectsProps {
    textArray: [string],
    speed: number,
    size: number
}

function TypingEffects({ textArray, speed, size }: TypingEffectsProps) {
  const [finishFlag, setFinishFlag] = useState(false);
  const [index, setIndex] = useState(0);

  const handleFinish = () => {
    setFinishFlag(true);
  };

  useEffect(() => {
    if (finishFlag) {
      if (index < textArray.length - 1) {
        setIndex(index + 1);
        setFinishFlag(false);
      } else if (index === textArray.length - 1) {
        setIndex(0);
        setFinishFlag(false);
      }
    }
  }, [finishFlag, index]);
  return (
    <TypingEffect text={textArray[index]} speed={speed} size={size} handleFinish={handleFinish} />
  )

};

export default TypingEffects;
