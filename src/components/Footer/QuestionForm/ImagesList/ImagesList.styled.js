import styled from 'styled-components';

export const ImagesList = styled.ul`
    position: absolute;
    left: 32px;
    bottom: ${( props ) => props.$error ? '43px' : '16px' };
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    background-color:  yellowgreen;
`;

export const ImageItem = styled.li`
    width: 77px;
    height: 48px;
    z-index: 10;
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
