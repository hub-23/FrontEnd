import styled from 'styled-components';
import { device } from '../../styles/device';

export const Svg = styled.svg`
    width: ${( { $xlWidth } ) => $xlWidth};
    height: ${( { $xlHeight } ) => $xlHeight};

    @media ${device.md} {
        width: ${( { $mdWidth } ) => $mdWidth};
        height: ${( { $mdHeight } ) => $mdHeight};
    }

    @media ${device.sm} {
        width: ${( { $smWidth } ) => $smWidth};
        height: ${( { $smHeight } ) => $smHeight};
    }
`;
