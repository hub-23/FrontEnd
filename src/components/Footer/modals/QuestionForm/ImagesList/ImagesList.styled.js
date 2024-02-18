import styled from 'styled-components';
import { device } from '../../../../../styles/device';

export const ImagesList = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 16px 45px 16px 32px;

    @media ${device.md} {
        padding-left: 24px;
    }
`;

export const ImageItem = styled.li`
    width: 77px;
    height: 48px;

    @media ${device.md} {
        width: 48px;
        height: 48px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0px;
`;

export const ImgDeleteBtn = styled.button`
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: initial;
`;
