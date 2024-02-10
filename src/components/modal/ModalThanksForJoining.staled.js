import styled from 'styled-components';
import { device } from '../../styles/device';
import { black, grayText, white } from '../../utils/variables.styled';

export const Modal = styled.div`
    position: relative;

    max-width: 775px;
    margin: 0 20px;
    padding: 70px 142px 59px 142px;

    max-height: calc(100vh - 40px);

    overflow-y: auto;
    scroll-behavior: smooth;

    border-radius: 20px 0px;
    background-color: ${white};

    @media ${device.md} {
        max-height: calc(100vh - 50px);
        padding: 70px 48px 59px 48px;
    }

    @media ${device.sm} {
        margin: 0 15px;
        padding: 50px 14px 63px 14px;
    }
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    max-width: 495px;

    @media ${device.md} {
        max-width: 453px;

        & > :last-child {
            text-align: center;
        }
    }

    @media ${device.sm} {
        max-width: initial;
    }
`;

export const LogoImg = styled.img`
    margin-bottom: 38px;

    @media ${device.md} {
        margin-bottom: 28px;
    }
`;

export const Title = styled.p`
    width: 100%;
    margin-bottom: 50px;

    text-align: center;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.26px;
    color: ${black};

    @media ${device.md} {
        margin-bottom: 40px;
    }

    @media ${device.sm} {
        margin-bottom: 30px;

        font-size: 20px;
        letter-spacing: 0.2px;
    }
`;

export const TextDescr = styled.p`
    margin-bottom: 30px;

    text-align: center;
    font-size: 20px;
    letter-spacing: 0.2px;

    color: ${black};

    & > span {
        font-size: inherit;
        letter-spacing: inherit;
        font-weight: 600;
    }

    @media ${device.md} {
        margin-bottom: 50px;
    }

    @media ${device.sm} {
        margin-bottom: 33px;

        font-size: 14px;
        letter-spacing: 0.14px;
    }
`;

export const BtnText = styled.p`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.24px;

    color: ${white};

    @media ${device.sm} {
        font-size: 18px;
        letter-spacing: 0.18px;
    }
`;

export const Text = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    color: ${grayText};

    @media ${device.sm} {
        font-size: 14px;
    }
`;
