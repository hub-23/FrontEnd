import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const StyledCard = styled.div`
    max-width: 360px;
    height: 460px;
    min-height: 100%;
    top: 2218px;
    margin: 170px 8px 66px;
    display: flex;
    flex-direction: column;
    margin: 10px;

    @media ${device.sm} {
        max-width: 240px;
        height: 314px;
        margin: 32px 10px;
    }
`;

export const Typography = styled.div`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.secondary};
    font-size: ${( props ) => props.fontSize || '16px'};
    font-weight: ${( props ) => props.fontWeight || '400'};
    line-height: ${( props ) => props.lineHeight || '22px'};
    text-align: left;
    letter-spacing: 0.01em;
    color: #ffffff;
    white-space: nowrap;
`;

export const StyledHoverCard = styled.div`
    // width: 230px;
    // height: 48px;
    width: 209px;
    height: 28px;
    padding: 14px 24px;
    display: none;
    position: absolute;
    width: 100%;
    top: 40%;
    left: 10%;
    z-index: 10;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #113268;
    white-space: nowrap;

    // @media ${device.sm} {
    //     width: 100px;
    //     height: 26px;
    //     position: absolute;
    //     top: 40%;
    //     right: 10%;
    //     width: 70%;
    //     left: 0%;
    // }
    // position: absolute;
    // left: 50px;
    // top: 152px;
`;

export const StyledPhoto = styled.div`
    max-width: 360px;
    height: 100%;
    position: relative;

    &:hover {
        ${StyledHoverCard} {
            display: block;
        },   
    },
`;

export const Photo = styled.img`
    max-width: 360px;
    max-height: 360px;
    object-fit: cover;
    width: 100%;
    height: 100vw;
    border-radius: 0px 20px 0px 20px;

    &:hover {
        background-color: transparent;
        opacity: 0.6;
    }

    @media ${device.sm} {
        max-width: 240px;
        height: 240px;
    }
`;

export const StyledRating = styled.div`
    max-width: 360px;
    height: 22px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 12px;
    margin-bottom: 12px;

    @media ${device.sm} {
        max-width: 240px;
        height: 17px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
`;

export const StyledLocation = styled.div`
    max-width: 134px;
    height: 22px;
    display: inline-block;

    @media ${device.sm} {
        width: 100px;
        height: 17px;
        font-size: 12px;
    }
`;

export const StyledContent = styled.div`
    max-height: 100px;
    display: flex;
    flex-direction: column;
`;

export const StyledInfo = styled.div`
    max-width: 187px;
    height: 54px;
    padding: 8px 0px 0px 8px;
    @media ${device.sm} {
        width: 139px;
        height: 41px;
    }
`;

export const StyledNameBox = styled.div`
    max-width: 174px;
    height: 28px;

    @media ${device.sm} {
        max-width: 139px;
        height: 22px;
        font-family: Nunito;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        letter-spacing: 0.16px;
    }
`;

export const StyledSubject = styled.div`
    max-width: 125px;
    height: 22px;

    @media ${device.sm} {
        max-width: 95px;
        height: 17px;
        font-family: Nunito;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 16.8px */
        letter-spacing: 0.12px;
    }
`;
