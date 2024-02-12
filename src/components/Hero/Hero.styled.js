import styled from 'styled-components';
import image from '../../assets/home/hero/bg-image.jpg';
import image2x from '../../assets/home/hero/bg-image-2x.jpg';
import imageTablet from '../../assets/home/hero/imageTablet.png';
import imageMobile from '../../assets/home/hero/imageMobile.png';
import { Container } from '../../utils/common.styled';
import { black, white } from '../../utils/variables.styled';
import { device } from '../../styles/device';

export const CountainerHero = styled( Container )`
    margin-top: 80px;
    padding-top: 100px;
    padding-bottom: 146px;
    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.13) 100%),
        image-set(url(${image}) 1x, url(${image2x}) 2x);

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #c4c4c4;

    @media ${device.md} {
        padding-top: 141px;
        padding-bottom: 199px;
        background-image: url(${imageTablet});
    }

    @media ${device.sm} {
        padding-top: 138px;
        padding-bottom: 154px;
        padding-bottom: 25px;
        background-image: url(${imageMobile});
    }
`;

export const Title = styled.h1`
    margin-bottom: 20px;
    width: 333px;

    font-family: Montserrat;
    font-size: 40px;
    font-weight: 600;
    line-height: calc(52 / 40);
    text-transform: uppercase;

    color: ${black};

    @media ${device.md} {
        width: 336px;
    }

    @media ${device.sm} {
        margin-bottom: 16px;
        width: 266px;
        font-size: 32px;
        line-height: calc(41.6 / 32);
    }
`;

export const Text = styled.h1`
    margin-bottom: 40px;
    width: 600px;

    font-size: 24px;
    font-weight: 500;
    line-height: calc(33.6 / 24);

    color: ${black};

    @media ${device.md} {
        width: 480px;
        font-size: 20px;
        line-height: calc(28 / 20);
        letter-spacing: 0.2px;
    }

    @media ${device.sm} {
        margin-bottom: 24px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: calc(19.6 / 14);
    }
`;

export const BtnWrapp = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 120px;

    @media ${device.md} {
        gap: 24px;
    }

    @media ${device.sm} {
        flex-direction: column;
        margin-bottom: 28px;
    }

    & > button {
        width: 294px;
        height: 56px;

        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.24px;

        border-radius: 20px 0px;
        border: none;
        color: ${white};

        &:first-child {
            background: linear-gradient(88deg, #09194d 0%, #234890 100%);
        }

        &:last-child {
            background: linear-gradient(88deg, #b92759 0%, #e3669c 100%);
        }

        @media ${device.md} {
            font-size: 20px;
            letter-spacing: 0.2px;
        }

        @media ${device.sm} {
            width: 100%;

            font-size: 16px;
            font-weight: 500;
            line-height: calc(22.4 / 16);
            letter-spacing: 0.16px;
        }
    }
`;
