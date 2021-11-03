import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    status?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    status?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    status: LinkStatus;
    items?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const MENU_HEIGHT = 52;
export declare const MENU_ENTRY_HEIGHT = 52;
export declare const SIDEBAR_WIDTH_FULL = 100;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
