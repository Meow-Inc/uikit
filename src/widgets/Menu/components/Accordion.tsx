import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { LinkStatus, PushedProps } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";

interface Props extends PushedProps {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight + 16}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  padding: ${({ isOpen, isPushed }) => (isOpen && isPushed ? `8px 0px ` : '0px')};
  margin: ${({ isOpen, isPushed }) => (isOpen && isPushed ? `8px 20px` : '0px 20px')};
  background-color: ${({ theme }) => theme.colors.accordianBackground};
  border-radius: 12px;

`;

const Accordion: React.FC<Props> = ({
  label,
  status,
  icon,
  isPushed,
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

  return (
    <Container>
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
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
