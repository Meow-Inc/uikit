import React from "react";
import styled from "styled-components";
import { CogIcon, ChevronLeftIcon, ChevronRightIcon, BarsIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import Logo from "./Logo";
import Text from "../../../components/Text/Text";


interface Props extends PanelProps, PushedProps {
  isMobile?: boolean;
}

const Container = styled.div<{ isPushed: boolean }>`
  flex: none;
  padding: 8px 5px;
  margin: 0px 16px;
  // background-color: ${({ theme }) => theme.nav.background};
  display: flex;

  button {
    width: ${({isPushed}) => isPushed ? '100%' : 'initial'};
    margin-right: 12px;

    > div {
      display: flex!important;
    }
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0px 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0px 20px;
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
  links,
  isMobile
}) => {


  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Container isPushed={false}>
        {isMobile &&
          <IconButton className="cog" variant="text" onClick={() => pushNav(!isPushed)}>
              {!isPushed ? <BarsIcon/> : <BarsIcon/> }
          </IconButton>
        }

        <Logo
          isPushed={isMobile ? true : false}
          togglePush={() => pushNav(!isPushed)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
    </Container>
  );
};

// if (!isPushed) {
//   return (
//     <Container isPushed={true}>
//
//     </Container>
//   );
// }


export default PanelHeader;
