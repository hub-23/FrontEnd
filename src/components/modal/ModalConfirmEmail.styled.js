import styled from 'styled-components';
import { device } from '../../styles/device';
import { black, grayText, white } from '../../utils/variables.styled';

export const Modal = styled.div`
    position: relative;

    max-width: 775px;
    margin: 0 20px;
    padding: 68px 140px 50px 140px;

    max-height: calc(100vh - 40px);

    overflow-y: auto;
    scroll-behavior: smooth;

    border-radius: 20px 0px;
    background-color: ${white};

    @media ${device.md} {
        max-height: calc(100vh - 50px);
        padding: 50px 67px;
    }

    @media ${device.sm} {
        margin: 0 15px;
        padding: 45px 20px;
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

export const Title = styled.p`
    /* margin-bottom: 30px; */
    width: 100%;
    margin-top: 42px;
    margin-bottom: 50px;

    text-align: center;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.26px;
    color: ${black};

    @media ${device.md} {
        margin-top: 30px;
        margin-bottom: 24px;
    }

    @media ${device.sm} {
        margin-top: 16px;
        margin-bottom: 20px;

        font-size: 18px;
        letter-spacing: 0.18px;
    }
`;

export const TextDescr = styled.p`
    margin-bottom: 69px;

    text-align: center;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.32px;

    color: ${black};

    & > span {
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        font-weight: 600;
    }

    @media ${device.md} {
        margin-bottom: 50px;
    }

    @media ${device.sm} {
        margin-bottom: 33px;

        font-size: 14px;
        letter-spacing: 0.224px;
    }
`;

export const WrappRegister = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    @media ${device.sm} {
        flex-direction: column;
        gap: 15px;
    }
`;

export const RegisterText = styled.p`
    color: ${grayText};
    font-size: 20px;
    font-weight: 600;

    @media ${device.sm} {
        font-size: 16px;
    }
`;

export const BtnLogin = styled.button`
    border: none;
    background: initial;

    font-size: 20px;
    font-weight: 600;

    color: ${black};

    @media ${device.sm} {
        font-size: 16px;
    }
`;
