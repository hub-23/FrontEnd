import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledSection = styled.section`
    min-width: 100%;
    max-width: 1440px;
    max-height: 720px;
    min-height: 100%;
    padding-bottom: 78px;
    overflow: hidden;
    background: #113268;
    color: #ffffff;

    @media ${device.sm} {
        max-width: 360px;
        min-width: 100%;
        max-height: 555px;
        min-height: 100%;
        padding-bottom: 48px;
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
    display: flex;
    justify-content: space-between;

    @media ${device.lg} {
        margin-top: 48px;
    }
`;

export const StyledTitle = styled.div`
    max-width: 399px;
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
    font-family: Nunito;
    font-size: 48px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0.48px;
    line-height: 62px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #ffffff;
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
`;

export const StyledBtnContainer1 = styled.div`
    @media ${device.md} {
        display: none;
    }

    @media ${device.md} {
        position: absolute;
        min-width: 100%;
    }
`;

export const ButtonTypography = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.2px;
    white-space: nowrap;

    @media ${device.lg} {
        font-size: 24px;
        line-height: 130%;
    }

    @media ${device.sm} {
        font-size: 16px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.16px;
    }
`;
export const StyledBtnContainer2 = styled.div`
    display: none;

    @media ${device.md} and ${device.md} {
        width: 320px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
