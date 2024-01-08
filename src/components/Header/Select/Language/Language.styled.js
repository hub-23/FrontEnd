import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const LanguageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media ${device.lg} {
        display: none;
    }
`;

export const LanguageBtn = styled.button`
    background-color: transparent;
    border: none;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => ( props.$active === 'true' ? '#797979' : props.theme.colors.black )};
`;

export const Divider = styled.div`
    height: 34px;
    width: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 8px;
    border-radius: 20px;
    color: #D5D5D5;
`;
