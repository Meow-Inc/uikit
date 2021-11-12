import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, KittyIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";
import Text from "../../../components/Text/Text";


import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

interface Props {
  cakePriceUsd?: number;
}



interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 36px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const LogoContainer = styled.div<{ isPushed: boolean }>`
  justify-content: flex-start;
  align-items: center;
  font-size: 28px;
  font-weight: 400;
  display: flex;
  color:  ${({ theme }) => (theme.colors.text)};
  flex-grow: 1;
  transition: opacity 0.4s;
  pointer-events: none;
  // ${({ isPushed, theme }) => (isPushed ? `
  //   opacity: 1;
  // `:`
  //   opacity: 0!important;
  // `)};

  svg {
    margin-bottom: 0px!important;
  }
`
const LogoImage = styled.img``
const LogoText = styled.div`
  margin-left: 8px;
  display:none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display:block;
  }
`


const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  let Icon = Icons['LogoIcon']

  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoContainer isPushed={isPushed}>
        <Icon width="36px" />
        <LogoText>meow</LogoText>
      </LogoContainer>
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <LogoWrapper>
          {innerLogo}
          Meow
        </LogoWrapper>
      ) : (
        <LogoWrapper>
          {innerLogo}
        </LogoWrapper>
      )}
    </Flex>
  );
};


export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
