import styled from 'styled-components';

export const Button = styled.button`
    position: absolute;
    top: 40px;
    right: 50px;
    right: ${( { $right } ) => $right};
    top: ${( { $top } ) => $top};

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: initial;
`;
