import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";
import {baseColors} from '../../theme/colors'

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      transform: initial!important;
      box-shadow: none!important;
      > div {
        color: ${theme.colors.textDisabled};
      }
      cursor: not-allowed;
    }

    &:disabled,
    &.pancake-button--disabled, .pancake-button--disabled&:hover {
      transform: initial!important;
      box-shadow: none!important;
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: .5rem;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  width: ${props => props.fullWidth ? '100%' : undefined};

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}


  ${layout}
  ${space}
  ${(props) => props.isButtonMenu && props.isSelected && props.variant === 'primary' && `
    :hover {
      transform: none!important;
      box-shadow: 0 .2rem 0 0 ${baseColors.primaryBorder}!important;
    }
  `}
  ${(props) => props.hideBorder && `
    border: 0px;
  `}

`;

export default StyledButton;
