import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import Logo from "./Logo";
import Text from "../../../components/Text/Text";


interface Props extends PanelProps, PushedProps {}

const Container = styled.div<{ isPushed: boolean }>`
  flex: none;
  padding: 8px 5px;
  margin: 0px 20px;
  // background-color: ${({ theme }) => theme.nav.background};

  button {
    width: ${({isPushed}) => isPushed ? '100%' : 'initial'};
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;

  button {
    padding: 0px!important;
  }
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;

  button {
    padding: 0px!important;
  }
`;

const PanelHeader: React.FC<Props> = ({
  isPushed,
  pushNav,
  isDark,
  links
}) => {
  if (!isPushed) {
    return (
      <Container isPushed={true}>
        <IconButton className="cog" variant="text" onClick={() => pushNav(true)}>
            <CogIcon />
        </IconButton>
      </Container>
    );
  }


  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Container isPushed={false}>
        <Logo
          isPushed={isPushed}
          togglePush={() => pushNav(!isPushed)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
    </Container>
  );
};

export default PanelHeader;
