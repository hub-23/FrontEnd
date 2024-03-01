import styled from 'styled-components';
import { device } from '../../utils/device';

export const Button = styled.button`
  position: absolute;

  top: ${( { $xlTop } ) => $xlTop};
  right: ${( { $xlRight } ) => $xlRight};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: initial;

  @media ${device.md} {
    top: ${( { $mdTop } ) => $mdTop};
    right: ${( { $mdRight } ) => $mdRight};
  }

  @media ${device.sm} {
    top: ${( { $smTop } ) => $smTop};
    right: ${( { $smRight } ) => $smRight};
  }
`;
