import styled from 'styled-components';
import { black, transition } from '../../utils/variables.styled';
import { device } from '../../utils/device';

export const Button = styled.button`
  position: absolute;
  right: ${( { $xlRight } ) => $xlRight};
  top: ${( { $xlTop } ) => $xlTop};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  background-color: initial;

  fill: none;
  stroke: ${black};

  scale: 1;
  transition: scale ${transition};

  &:hover {
    scale: 1.03;
  }

  @media ${device.md} {
    right: ${( { $mdRight } ) => $mdRight};
    top: ${( { $mdTop } ) => $mdTop};
  }

  @media ${device.sm} {
    right: ${( { $smRight } ) => $smRight};
    top: ${( { $smTop } ) => $smTop};
  }
`;
