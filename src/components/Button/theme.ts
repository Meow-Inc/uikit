import { scales, variants } from "./types";
import {baseColors} from '../../theme/colors'

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.MS]: {
    height: "40px",
    padding: "0 16px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    padding: "0 8px",
    "> div": {
      fontSize: "12px",
    }
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    border: "2px solid",
    borderColor: `${baseColors.primaryBorder}`,
    boxShadow: `0 .2rem 0 0 ${baseColors.primaryBorder}`,
    transition: 'all .2s cubic-bezier(.06,.67,.37,.99)',
    ":hover": {
      transform: 'translateY(-.2rem)',
      boxShadow: `0 .4rem 0 0 ${baseColors.primaryBorder}`,
      opacity: '1',
    },
    "> div" : {
      color: "white",
    }
  },
  [variants.PALE]: {
    backgroundColor: `${baseColors.palePrimary}`,
    border: "2px solid",
    borderColor: `${baseColors.palePrimary}`,
    boxShadow: "none",
    ":disabled": {
      backgroundColor: `${baseColors.palePrimary}`,
    },
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "primary",
    }
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    ":disabled": {
      backgroundColor: "transparent",
    },
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "primary",
    }
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "primary",
    }
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "backgroundAlt",
    }
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "white",
    }
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "white",
    }
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active)" : {
        opacity: "0.65",
    },
    "&:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled)" : {
        opacity:"0.85",
        transform: "translateY(1px)",
        boxShadow: "none",
    },
    "> div" : {
      color: "primary",
    }
  },
};
