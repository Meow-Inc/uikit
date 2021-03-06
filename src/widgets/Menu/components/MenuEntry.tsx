import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  isMobile?: boolean;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled(Text)<{ isPushed: boolean }>`
  ${({ isPushed, theme }) => (isPushed ? `
    color: ${theme.colors.contrast};
  `:`
    display: block!important;
  `)};
  flex-grow: 1;
  transition: opacity 0.4s;
`;


const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 20px" : "0 20px")};
  // padding: ${({ isMobile }) => (isMobile ? `0px 14px`:`0px 20px`)};
  width: ${({ isMobile }) => (isMobile ? `100%`:`initial`)};

  margin: ${({ secondary }) => (secondary ? "0 8px" : "0 0px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? "transparent" : "transparent")};
  color: ${({ theme }) => theme.colors.contrast};
  background-color: ${({ isActive, theme }) => (isActive ? `${theme.colors.purpleDark}` : "none")};
  border-radius: ${({ secondary }) => (secondary ? "8px" : "12px")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({  isActive, theme }) => (!isActive ? theme.colors.menuHoverBackground : theme.colors.purpleDark)};
  }

  a > div {
    color: ${({  isActive, theme }) => (!isActive ? theme.colors.contrast : theme.colors.contrast)};
  }

  a > svg {
    fill: ${({  isActive, theme }) => (!isActive ? theme.colors.contrast : theme.colors.contrast)};
    // margin-right: ${({ isMobile }) => (isMobile ? `0px` : `12px`)};
    opacity: 0.5;
  }

  > svg:first-child {
    margin-right: 12px;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
