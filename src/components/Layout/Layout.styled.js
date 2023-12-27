import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledWrapper = styled.section`
    max-width: 1440px;
    min-width: 100%;
    // height: 100%;
    min-height: 100vw;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media ${device.sm} {
        min-height: 100vw;
    }
`;

export const StyledContent = styled.section`
    flex-grow: 1;
`;
