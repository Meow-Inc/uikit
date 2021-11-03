export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};


export type ThemeShadows = {
  stickyHeader: string;
  dropDown: string;
}


export type Colors = {
  yellow: string;
  pink: string;
  purple: string;
  teal: string;
  palePrimary: string;
  primary: string;
  primaryBorder: string;
  menuSelectedBackground: string;
  menuSelectedColor: string;
  menuHoverBackground: string;
  accordianBackground: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDark: string;

  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;

  // Theme based shadows
  shadows: ThemeShadows;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
