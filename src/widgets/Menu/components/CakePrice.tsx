import React from "react";
import styled from "styled-components";

import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import Image from "../../../components/Image/Image"

import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  let Icon = Icons['LogoIcon']
  return cakePriceUsd ? (
    <PriceLink href="https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">
      <Text color="textSubtle" bold ml="8px">{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
