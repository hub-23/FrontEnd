import styled from 'styled-components';
import { device } from '../../utils/device';

export const Svg = styled.svg`
  width: ${( { $xlWidth } ) => $xlWidth};
  height: ${( { $xlHeight } ) => $xlHeight};
  stroke: ${( { $stroke } ) => $stroke};
  fill: ${( { $fill } ) => $fill};
  transform: ${( { $transformRotate } ) =>
    $transformRotate ? 'rotate(180deg)' : ''};

  @media ${device.md} {
    width: ${( { $mdWidth } ) => $mdWidth};
    height: ${( { $mdHeight } ) => $mdHeight};
  }

  @media ${device.sm} {
    width: ${( { $smWidth } ) => $smWidth};
    height: ${( { $smHeight } ) => $smHeight};
  }
`;
