import styled from 'styled-components';

export const ImagesList = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const Image = styled.img`
    width: 77px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px 0px;
    z-index: 10;
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
