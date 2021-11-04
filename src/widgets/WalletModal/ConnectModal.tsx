import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  button {
    display: flex;
    flex-direction: column;
    min-height: 91px;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    margin: 0px;
    svg {
      margin-bottom: 8px;
    }
  }
`


const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <Grid>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? "8px" : "0"}
        />
      ))}
    </Grid>
    <HelpLink href="https://docs.pancakeswap.finance/help/faq#how-do-i-connect-my-wallet-to-pancakeswap" external>
      <HelpIcon color="primary" mr="6px" />
      Learn how to connect
    </HelpLink>
  </Modal>
);

export default ConnectModal;
