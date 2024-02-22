import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${( { $borderRadius } ) => $borderRadius || '8px 0px'};
`;

export const ImgDeleteBtn = styled.button`
    position: absolute;
    top: ${( { $top } ) => $top || '-8px'};
    right: ${( { $right } ) => $right || '-8px'};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: initial;
`;
