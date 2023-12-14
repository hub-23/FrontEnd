import styled from 'styled-components';
import image from '../../assets/home/hero/bg-image.jpg';
import image2x from '../../assets/home/hero/bg-image-2x.jpg';
import { device } from '../../styles/device';

export const StyledSection = styled.section`
    position: relative;
    background-image: image-set(url(${image}) 1x, url(${image2x}) 2x);
    width: 100%;
    height: 900px;
    background-size: cover;
`;

export const StyledContainer = styled.div`
    padding: 100px 160px 145px 160px;
    height: 100%;
`;

export const StyledGradient = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 900px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.13) 100%);
`;

export const StyledTitle = styled.h1`
    width: 333px;
    height: 156px;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    text-transform: uppercase;
    color: #2d2d2d;
    margin-bottom: 20px;

    @media ${device.lg} {
        max-width: 266px;
        height: 126px;
        font-size: 32px;
    }

    @media ${device.sm} {
        max-width: 200px;
        height: 93px;
        font-size: 24px;
    }
`;

export const StyledText = styled.p`
    width: 600px;
    height: 102px;
    margin-bottom: 40px;
    color: #2d2d2d;
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media ${device.lg} {
        max-width: 320px;
        height: 88px;
        font-weight: 400;
        font-size: 16px;
    }

    @media ${device.sm} {
        max-width: 320px;
        height: 60px;
        font-weight: 400;
        font-size: 14px;
    }
`;

export const StyledBtnContainer1 = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 120px;

    .btn {
        width: 294px;
        height: 56px;

        @media ${device.sm} {
            width: 320px;
        }
    }
`;

export const ButtonTypography = styled.p`
    font-family: Nunito;
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
    font-style: normal;
    letter-spacing: 0.24px;
    color: #f9f9f9;

    @media ${device.sm} {
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 0.16px;
    }
`;
