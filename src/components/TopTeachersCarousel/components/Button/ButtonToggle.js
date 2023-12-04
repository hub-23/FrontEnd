import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const ButtonToggle = styled.button`
    border: none;
    width: 32px;
    height: 32px;
    background: #113268;
    color: #ffffff;
    margin: 0px 60px;

    @media ${device.sm} {
        margin: 0px 20px;
        width: 24px;
        height: 24px;
    }
`;
