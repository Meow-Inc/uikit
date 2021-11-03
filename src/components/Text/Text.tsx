import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

// Fixes negative space at the bottom of cusotm text "Hiruko"
import { leadingTrim } from "leading-trim";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const isFlex = ({ flex }: TextProps) => {
  return flex ? "display: flex; align-items: center;" : "display: block;";
};

const trimLeadingText = ({ fontSize, small }: TextProps) => {
  let lineHeight = 1.5
  let fSize = small ? 14 : fontSize ? parseInt(fontSize.substring(0, 2)) : 16
  let heightMulSize = lineHeight * fSize

  let cropAmount = heightMulSize / 2.5
  let topCrop = +(cropAmount / 2.6).toFixed(2)
  let bottomCrop = +((cropAmount / 2) * 1.65).toFixed(2)

  let trimmed = leadingTrim({
      lineHeight: 1.5,  // unitless `line-height` that you want for the text
      reference: {      // reference numbers for the `@font-face` you'll use
        fontSize: small ? 14 : fSize || 16,   // `font-size` in px
        lineHeight: 1.5,  // unitless `line-height`
        topCrop: topCrop,     // height to remove from the top in px
        bottomCrop: bottomCrop,  // height to remove from the bottom in px
      }
  })
  return trimmed
};

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}

  font-family: 'Hiruko-Regular', 'serif';
  @font-face {
    font-family: 'Hiruko-Regular';
    src: local('Hiruko-Regular'), url('./fonts/Hiruko-Regular.otf') format('opentype');
  }
  ${trimLeadingText}
  ${isFlex}
`;



Text.defaultProps = {
  color: "text",
  small: false,
  ellipsis: false,
};

export default Text;
