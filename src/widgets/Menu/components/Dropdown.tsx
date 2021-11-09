import React, { ReactNode, useState, useRef, } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { LinkStatus, PushedProps } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";
import useOnClickOutside from '../../../hooks/useClickOutSide'

interface Props extends PushedProps {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
  isMobile?: boolean;
}

const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  width: ${({ isMobile }) => (isMobile ? `100%`:`initial`)};
`;

const DropdownContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight + 16}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  padding: ${({ isOpen, isPushed }) => (isOpen && isPushed ? `8px 0px ` : '0px')};
  background-color: ${({ theme }) => theme.nav.background};
  box-shadow: ${({ theme }) => theme.colors.shadows.dropDown};
  border-radius: 0px 0px 12px 12px;
  top: 60px;
  position: absolute;
  width: 100%;
`;

const Dropdown: React.FC<Props> = ({
  label,
  status,
  icon,
  isPushed,
  isMobile,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };
  console.log('IsMobile', isMobile)
  // Handle close if click outside
  const ref = useRef(null)
  useOnClickOutside(ref,() => setIsOpen(false))


  return (
    <Container ref={ref} isMobile={isMobile ? true : false}>
      <MenuEntry onClick={handleClick} className={className} isActive={isActive} role="button">
        {icon}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {status && (
          <LinkStatusComponent color={status.color} fontSize="14px">
            {status.text}
          </LinkStatusComponent>
        )}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <DropdownContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}>
        {children}
      </DropdownContent>
    </Container>
  );
};

export default Dropdown;
