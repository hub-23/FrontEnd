import styled from 'styled-components';
import { accent, black, device, white } from './variables.styled';
const gapItem = 20;
const numberItem = 3;

export const Container = styled.section`
    /* outline: 2px solid green; */

    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 20px;

    @media ${device.mobile} {
        max-width: 360px;
    }

    @media ${device.desktop} {
        padding: 120px 160px;
        max-width: 1440px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 32px;
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(31.2px / 24px);
    letter-spacing: 0.24px;
    color: ${black};

    @media ${device.desktop} {
        font-size: 48px;
        line-height: calc(62.4px / 48px);
        letter-spacing: 0.48px;
    }
`;

export const TopLessons = styled.ul`
    margin-bottom: 18px;

    @media ${device.desktop} {
        display: flex;
        flex-wrap: wrap;
        margin-top: -${gapItem}px;
        margin-left: -${gapItem}px;
        margin-bottom: 39px;
    }

    & li {
        padding: 16px 20px;
        border-radius: 20px 20px 0px 20px;
        border: 1px solid ${accent};
        background-color: ${white};

        @media (max-width: 1440px) {
            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }

        @media ${device.desktop} {
            flex-basis: calc(100% / ${numberItem} - ${gapItem}px);
            margin-top: ${gapItem}px;
            margin-left: ${gapItem}px;
            padding: 20px 24px;
        }
    }

    & h2 {
        margin-bottom: 2px;
        font-family: Nunito;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: calc(22.4px / 16px);
        letter-spacing: 0.16px;
        color: ${black};

        @media ${device.desktop} {
            margin-bottom: 4px;
            font-size: 24px;
            line-height: calc(33.6px / 24px);
        }
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & p {
        font-family: Nunito;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: calc(16.8px / 12px);
        letter-spacing: 0.12px;
        color: ${black};

        @media ${device.desktop} {
            font-size: 16px;
            line-height: calc(22.4px / 16px);
            letter-spacing: 0.16px;
        }
    }
`;

export const SeeMore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    & p {
        margin-bottom: 2px;
        font-family: Nunito;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: calc(22.4px / 16px);
        letter-spacing: 0.16px;
        color: ${black};

        @media ${device.desktop} {
            margin-bottom: 4px;
            font-size: 20px;
            line-height: calc(33.6px / 24px);
        }
    }
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;

    & svg {
        rotate: ${({ $isActive }) => ($isActive ? '0deg' : '180deg')};
    }
`;
