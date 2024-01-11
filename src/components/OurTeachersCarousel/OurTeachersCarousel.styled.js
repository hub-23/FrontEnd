import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledSection = styled.section`
    min-width: 100%;
    max-height: 400px;
    min-height: 100%;
    overflow: hidden;
    color: #ffffff;

    @media ${device.sm} {
        // max-width: 360px;
        min-width: 100%;
        max-height: 555px;
        min-height: 100%;
        padding-bottom: 28px;
    }
`;

export const StyledWrapper = styled.div`
    min-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;
`;

export const StyledContent = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    @media ${device.lg} {
        margin-top: 48px;
    }

    @media ${device.sm} {
        margin-top: 28px;
        margin-bottom: 14px;
    }
`;

export const StyledTitle = styled.div`
    max-width: 364px;
    height: 62px;
    padding-left: 160px;

    @media ${device.xl} {
        padding-left: 80px;
    }

    @media ${device.lg} {
        max-width: 300px;
        height: 46px;
        padding-left: 40px;
    }

    @media ${device.sm} {
        max-width: 200px;
        height: 31px;
        padding-left: 20px;
    }
`;

export const StyledTitleTypography = styled.h2`
    color: #2d2d2d;
    font-family: Nunito;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0.48px;
    white-space: nowrap;

    @media ${device.lg} {
        font-size: 40px;
        line-height: 50px;
    }
    @media ${device.sm} {
        font-size: 24px;
        line-height: 130%;
        letter-spacing: 0.24px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    background: #ffffff;
    color: #113268;
`;
