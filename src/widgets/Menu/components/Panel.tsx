import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import PanelHeader from "./PanelHeader";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  isSidebar: boolean;
  isTopOfPage?: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; isTopOfPage: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "0" : 0)};
  background-color: ${({ isTopOfPage, theme }) => (isTopOfPage ? 'rgba(0,0,0,0)' : theme.colors.purple)};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  top: 0;
  height: 72px;
  width: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.1s linear;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  border-radius: 0px;
  ${({ isPushed }) => !isPushed && "white-space: nowrap;"};

  ${({ theme }) => theme.mediaQueries.nav} {
    // border-right: 2px solid rgba(133, 133, 133, 0.1);
    // width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;



const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, userBlock, isMobile, isTopOfPage } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu} isTopOfPage={isTopOfPage ? true : false}>
      <PanelHeader {...props} isMobile={isMobile ? true : false}/>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
