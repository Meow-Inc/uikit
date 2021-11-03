import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

interface DivProps {
  width: string
}

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const shadow = keyframes`
  from, 20%, 53%, 80%, to {
    transform: scale(0.8);
    opacity: 1;
  }

  40%, 43% {
    transform: scale(1.3);
    opacity: 0.4;
  }

  70% {
    transform: scale(1.2);
    opacity: 0.7;
  }

  90% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const Container = styled.div<DivProps>`
  height: ${(props) => props.width && props.width};
  width: ${(props) => props.width && props.width};
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s ease infinite;
  transform: translate3d(0, 0, 0);
  z-index: 1;
`;

const Shadow = styled.div<DivProps>`
  animation: ${shadow} 2s ease infinite;
  transform: translate3d(0, 0, 0);
  height: 10px;
  background-color: rgba(0,0,0, 0.18);
  border-radius: 50%;
  width: ${(props) => props.width && props.width};
  position: absolute;
  bottom: 0px;
  z-index: 0;
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container width={`${size * 0.5}px`}>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
      <Shadow width={`${size * 0.5}px`} />
    </Container>
  );
};
// <FloatingPanIcon width={`${size}px`} />


export default Spinner;
