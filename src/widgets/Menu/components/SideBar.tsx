import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import PanelHeader from "./PanelHeader";
import SidebarBody from './SidebarBody';
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  isSidebar: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean; }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "0" : 0)};
  background-color: ${({ theme }) => theme.nav.background};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  top: 71px;
  left: ${({ isPushed }) => !isPushed ? "-220px" : '0px'};
  height: 100%;
  width: 220px;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  border-bottom: 2px solid rgba(133, 133, 133, 0.1);
  display: ${({ isMobile }) => isMobile ? "block" : 'none'};

  ${({ isPushed }) => !isPushed && "white-space: nowrap;"};

  ${({ theme }) => theme.mediaQueries.nav} {
    // border-right: 2px solid rgba(133, 133, 133, 0.1);
    // width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;



const SideBar: React.FC<Props> = (props) => {
  const { isPushed, showMenu, userBlock, isMobile } = props;
  return (
    <StyledPanel isPushed={isPushed} isMobile={isMobile} showMenu={showMenu}>
      <SidebarBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default SideBar;
