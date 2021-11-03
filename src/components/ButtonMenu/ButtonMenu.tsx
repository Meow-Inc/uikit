import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const getBorderColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "inputSecondary" : "disabled"];
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  border-radius: 0.5rem;
  background-color: ${getBackgroundColor};
  border-bottom: 3px solid ${getBackgroundColor};

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  children,
  ...props
}) => {
  return (
    <StyledButtonMenu variant={variant} {...props}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          isDisabled: activeIndex !== index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          isSelected: activeIndex === index,
          isButtonMenu: true,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
