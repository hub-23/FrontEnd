import styled from 'styled-components';
import { black, grayStroke, white } from '../../utils/variables.styled';
import { device } from '../../styles/device';

export const PhoneCode = styled.div`
    position: absolute;
    left: 32px;
    top: 16px;

    /* width: 100%; */

    z-index: 1;
    cursor: pointer;

    @media ${device.sm} {
        top: 9px;
    }
`;

export const TextWrapp = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    margin-right: 2px;
    font-size: 24px;
`;

export const TextCode = styled.p`
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(20 / 28);
    letter-spacing: 0.2px;

    color: ${black};

    @media ${device.sm} {
        font-size: 16px;
        line-height: calc(22.4 / 16);
        letter-spacing: 0.16px;
    }
`;

export const List = styled.ul`
    margin-top: 20px;
    /* margin-left: -32px; */
    padding: 20px 32px;
    /* width: calc(100% - 32px); */
    /* width: ${( { $widthList } ) => $widthList}; */
    height: ${( { $height } ) => $height};

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(16px / 22.4px);

    border-width: 1px;
    border-style: solid;
    border-radius: 20px 0px;
    border-color: ${grayStroke};

    color: ${black};
    background-color: ${white};
    overflow-y: auto;
    scroll-behavior: smooth;

    & > :not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;

    & > :nth-child(1) {
        margin-right: 12px;
        font-size: 18px;
    }

    & > :nth-child(2) {
        margin-right: 8px;
    }
`;
