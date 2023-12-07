import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const ButtonToggle = styled.button`
    width: 32px;
    height: 32px;
    margin: 0px 60px;
    border: none;
    background: #113268;
    color: #ffffff;

    @media ${device.sm} {
        width: 24px;
        height: 24px;
        margin: 0px 20px;
    }
`;
