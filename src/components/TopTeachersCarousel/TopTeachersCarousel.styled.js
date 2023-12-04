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
        height: 555px;
        max-height: 100%;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
`;

export const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;

    @media ${device.sm} {
        margin-top: 48px;
    }
`;

export const StyledTitle = styled.div`
    width: 399px;
    height: 62px;
    padding-left: 160px;

    @media ${device.xl} {
        padding-left: 80px;
    }

    @media ${device.lg} {
        padding-left: 40px;
    }

    @media ${device.sm} {
        width: 200px;
        height: 31px;
        padding-left: 20px;
    }
`;

export const StyledTitleTypography = styled.h2`
    font-family: Nunito;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;

    @media ${device.lg} {
        word-break: break-all;
        font-size: 40px;
        line-height: 50px;
    }
    @media ${device.sm} {
        word-break: break-all;
        font-size: 24px;
        line-height: 36px;
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
export const StyledTopTeachersButton = styled.button`
    width: 230px;
    height: 48px;
    // top: 2130px;
    // left: 1050px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;
    border-radius: 20px 0px;
    background: #ffffff;

    &:hover {
        border: 4px solid #ffffff;
    }

    &:active {
        box-shadow: 2px 2px 12px 0px rgba(255, 255, 255, 0.24), -2px -2px 12px 0px rgba(255, 255, 255, 0.24);
        border: 4px solid #ffffff;
    }

    &:disabled {
        background: #d5d5d5;
    }

    @media ${device.lg} {
        position: absolute;
        min-width: 100%;
    }
`;
export const ButtonTypography = styled.p`
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.2px;
    white-space: nowrap;

    @media ${device.lg} and ${device.lg} {
        font-size: 24px;
        line-height: 130%; /* 31.2px */
    }
`;
export const StyledBtnContainer2 = styled.div`
    display: none;

    @media ${device.lg} and ${device.lg} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 320px;
    }
`;
