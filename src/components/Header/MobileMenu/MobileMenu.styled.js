import styled from 'styled-components';
import { device } from '../../../styles/device';

export const BurgerBtn = styled.button`
    display: none;
    @media ${device.lg} { // 992  - до - моб меню
        display: block;
        fill: ${( props ) => props.color || props.theme.colors.black};
        background-color: transparent;
        border: none;
    }
`;
