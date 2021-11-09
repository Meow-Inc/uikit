import React from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    isSidebar: boolean;
}
declare const SideBar: React.FC<Props>;
export default SideBar;
