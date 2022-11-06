import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
    size: number;
}

const typeAnimation = keyframes`
    100% { color: white; }
`;

const TypeText = styled.div<Props>`
  font-size: ${(props: Props) => props.size}px;
  &:after {
    display: inline-block;
    height: ${(props: Props) => props.size * 0.7}px;
    margin-left: 3px;
    border-right: 3px solid;
    content: "";
    animation-name: ${typeAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
`;

interface BlinkProps {
    text: string,
    size: number,
    speed: number,
    handleFinish: () => void
}

const TypingEffect = ({ text, size = 100, speed = 100, handleFinish }: BlinkProps) => {
  const [blinkT, setBlinkT] = useState("");
  const [status, setStatus] = useState(0);
  useEffect(() => {
    if (status === 0) {
      if (text.length >= 0 && blinkT.length < text.length) {
        if (blinkT.length !== 0) {
          setTimeout(() => {
            setBlinkT(blinkT + text[blinkT.length]);
          }, speed);
        } else {
          setTimeout(() => {
            setBlinkT(text[0]);
          }, speed);
        }
      }
      if (blinkT.length === text.length) {
        setTimeout(() => {
          setStatus(1);
        }, speed);
      }
    } else {
      //reverse status === 1
      if (text.length > 0 && blinkT.length > 0) {
        setTimeout(() => {
          setBlinkT(blinkT.slice(0, blinkT.length - 1));
        }, speed);
      }
      if (blinkT.length === 0) {
        setStatus(0);
        handleFinish();
      }
    }
  }, [blinkT, text, speed, status, handleFinish]);
  return (
      <TypeText size={size}>{blinkT}</TypeText>
  )
};

export default TypingEffect;
