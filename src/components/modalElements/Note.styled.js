import styled from 'styled-components';
import { device } from 'styles/device';
import { accent } from 'utils/variables.styled';

export const WrappWarningText = styled.div`
    position: absolute;
    bottom: ${ ( { $xlBottom } ) => $xlBottom || '75px'};
    left: ${( { $xlLeft } ) => $xlLeft || '4px'};
    display: flex;
    align-items: center;
    gap: ${( { $gap } ) => $gap || '8px'};
    
        
    @media ${device.md} {
        align-items: start;
        bottom: ${ ( { $mdBottom } ) => $mdBottom};
        left: ${( { $mdLeft } ) => $mdLeft};
    }
    @media ${device.sm} {
        bottom: ${( { $smBottom } ) => $smBottom || '65px'};
        left: ${( { $smLeft } ) => $smLeft || '0'};
    }
`;

export const WarningText = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: ${( { $xlFontSize } ) => $xlFontSize || '16px'};
    line-height: ${( { $xlLineHeight, $xlFontSize } ) => 
        `calc(${$xlLineHeight} / ${$xlFontSize})` || 'calc(22.4 / 16)'}; 
    color: ${( props ) => props.$error ? accent : props.theme.colors.black};

    @media ${device.md} {
        font-size: ${( { $smFontSize } ) => $smFontSize || '14px'};
        line-height: ${( { $smLineHeight, $smFontSize } ) => 
        `calc(${$smLineHeight} / ${$smFontSize})` || 'calc(19.6 / 14)'}; 
    }
`;
