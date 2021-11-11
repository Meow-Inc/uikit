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
import '../../../hooks/'
interface Props extends PanelProps, PushedProps {}

const Container = styled.div<{ isDark: boolean, isPushed: boolean}>`
  flex: none;
  display: flex;
  flex-direction: row;
  padding: ${({ isPushed }) => isPushed ? '0px' : '4px'};;
  margin: ${({ isPushed }) => isPushed ? '0px' : '0px'};
  background-color: ${({ theme, isPushed, isDark }) => isPushed && isDark ? theme.card.background : isPushed && !isDark ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)'};
  border-radius: 16px;
  align-items: center;
  margin-right: 26px;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  height: 24px;
  
  button {
    padding: 0px!important;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    margin: 0px 16px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0px 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0px 20px;
  }
`;

const PriceEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
`;


const ThemmeSwitcherContainer = styled.div`
  margin-top: -3px;
`
const LoginContainer = styled.div`
  margin-left: 24px;
`
const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  userBlock
}) => {
  console.log('Is Dark', isDark)
  // if (!isPushed) {
  //   return (
  //     <Container isDark={isDark} isPushed={false}>
  //       <IconButton variant="text" onClick={() => pushNav(true)}>
  //         <CogIcon />
  //       </IconButton>
  //     </Container>
  //   );
  // }
  // <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
  // <SocialLinks />
  // <SettingsEntry>
  //   <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
  // </SettingsEntry>
  return (
    <Container isDark={isDark} isPushed={true}>
      <PriceEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
      </PriceEntry>

      <LoginContainer>
      {userBlock}
      </LoginContainer>
    </Container>
  );
};

export default PanelFooter;
