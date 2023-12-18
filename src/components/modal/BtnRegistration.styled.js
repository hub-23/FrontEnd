import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: ${( { $marginBottom } ) => $marginBottom};
    width: ${( { $width } ) => $width};
    height: ${( { $height } ) => $height};

    border-radius: 20px 0px;
    border: 1px solid ${( { $strokeColor } ) => $strokeColor};
    background-color: ${( { $bgColor } ) => $bgColor};
    background: linear-gradient(${( { $bgColorGradient } ) => $bgColorGradient});

    & p {
        font-family: Nunito;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: calc(20px / 20px);

        color: ${( { $color } ) => $color};
    }
`;
