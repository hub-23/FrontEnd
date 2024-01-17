import styled from 'styled-components';
import image from '../../assets/home/hero/bg-image.jpg';
import image2x from '../../assets/home/hero/bg-image-2x.jpg';
import imageMobile from '../../assets/home/hero/imageMobile.png';
import imageTablet from '../../assets/home/hero/imageTablet.png';
import { device } from '../../styles/device';

export const StyledSection = styled.section`
    outline: 1px solid green;

    position: relative;
    background-image: image-set(url(${image}) 1x, url(${image2x}) 2x);
    width: 100%;
    height: 900px;
    background-size: cover;

    @media ${device.lg} {
        position: relative;
        background-image: image-set(url(${imageTablet}));
        background-size: 100% 100%;
        width: 100%;
        max-height: 1170px;
    }

    @media ${device.sm} {
        position: relative;
        background-image: image-set(url(${imageMobile}));
        background-size: 100% 100%;
        width: 100%;
        height: 728px;
    }
`;

export const StyledContainer = styled.div`
    padding: 100px 160px 145px 160px;
    height: 100%;
    overflow: hidden;

    @media ${device.lg} {
        padding: 100px 141px 154px 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media ${device.md} {
        padding: 100px 141px 154px;
    }

    @media ${device.sm} {
        padding: 100px 20px 154px 20px;
    }
`;

export const StyledGradient = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 900px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.13) 100%);

    @media ${device.lg} {
        max-height: 1170px;
    }

    @media ${device.sm} {
        height: 728px;
    }
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
        max-height: 93px;
        margin-bottom: 10px;
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
        margin-bottom: 40px;
        font-weight: 400;
        font-size: 16px;
    }

    @media ${device.sm} {
        max-width: 300px;
        max-height: 70px;
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

export const StyledBtnContainer1 = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 120px;

    @media ${device.lg} {
        // flex-direction: column;
        // justify-content: center;
        // margin-bottom: 120px;
        // gap: 24px;
    }

    @media ${device.md} {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 60px;
        gap: 24px;
    }

    @media ${device.sm} {
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        margin-bottom: 20px;
    }

    .btn {
        width: 294px;
        height: 56px;

        font-family: Nunito;
        font-size: 24px;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: 0.24px;
        color: #f9f9f9;

        @media ${device.sm} {
            max-width: 290px;

            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
            line-height: 140%;
            letter-spacing: 0.16px;
        }
    }
`;
