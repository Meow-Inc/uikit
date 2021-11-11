import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  palePrimary: "rgb(238 83 209 / 20%)",
  primary: "#ef52d1",
  primaryBright: "#53DEE9",
  primaryBorder: "#c13da8",
  primaryDark: "#c13da8",
  secondary: "#b1a2f5",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const bannerColorsLight =  {
  yellow: "#fcce2b",
  pink: "#ee56d3",
  purple: "#a568f6",
  teal: "#53caee",
}

export const bannerColorsDark =  {
  yellow: "#ffb80b",
  pink: "#24bfec",
  purple: "#9a6bff",
  teal: "#2db1d9",
}

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#060506",
  purpleDark: "#8a5eeb",
};

export const shadowsLight = {
  stickyHeader: "rgba(47 42 68  / 10%) 0px 56px 46px -25px",
  dropDown: "rgb(47 42 68  / 10%) 0px 25px 35px -7px",
}

export const shadowsDark = {
  stickyHeader: "rgba(0 0 0 / 30%) 0px 56px 46px -25px",
  dropDown: "rgb(0 0 0 / 30%) 0px 25px 35px -7px",
}

export const lightColors: Colors = {
  ...bannerColorsLight,
  ...baseColors,
  ...additionalColors,
  menuSelectedBackground: "#ef52d1",
  menuSelectedColor: "#fff",
  menuHoverBackground: "#eae6eaa3",
  accordianBackground: 'rgb(133 133 133 / 6%)',
  background: "#f7f5f7",
  backgroundDark: "#f7f5f7",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
  shadows: {
    ...shadowsLight
  }
};

export const darkColors: Colors = {
  ...bannerColorsDark,
  ...baseColors,
  ...additionalColors,
  menuSelectedBackground: "#ef52d1",
  menuSelectedColor: "#fff",
  menuHoverBackground: "#ffffff0d",
  accordianBackground: '#00000024',
  secondary: "#9A6AFF",
  background: "#2d2d32",
  backgroundDark: "#2a262e",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#3d3842",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
  shadows: {
    ...shadowsDark
  }
};
