import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledSection = styled.section`
    min-width: 100%;
    max-width: 1440px;
    max-height: 720px;
    min-height: 100%;
    margin-top: 2036px;
    margin-bottom: 30px;
    overflow: hidden;
    background: #113268;
    color: #ffffff;
    padding-bottom: 78px;

    @media ${device.sm} {
        max-width: 360px;
        min-width: 100%;
        max-height: 555px;
        min-height: 100%;
        padding-bottom: 48px;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 100%;
    overflow: hidden;
    height: 100%;
`;

export const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 80px;

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
    line-height: 130%; /* 62.4px */
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
        line-height: 130%; /* 31.2px */
        letter-spacing: 0.24px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledBtnContainer1 = styled.div`
    @media ${device.lg} {
        display: none;
    }
    @media ${device.lg} {
        position: absolute;
        min-width: 100%;
    }
`;

export const ButtonTypography = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 20px */
    letter-spacing: 0.2px;
    white-space: nowrap;

    @media ${device.lg} and ${device.lg} {
        font-size: 24px;
        line-height: 130%; /* 31.2px */
    }

    // font-size: 16px;
    // font-style: normal;
    // font-weight: 500;
    // line-height: 140%; /* 22.4px */
    // letter-spacing: 0.16px;
`;
export const StyledBtnContainer2 = styled.div`
    display: none;

    @media ${device.lg} and ${device.lg} {
        width: 320px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
