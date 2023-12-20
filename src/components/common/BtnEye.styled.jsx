import styled from 'styled-components';
import { black, transition } from '../../utils/variables.styled';

export const Button = styled.button`
    position: absolute;
    right: ${( { $right } ) => $right};
    top: ${( { $top } ) => $top};

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 50%;
    background-color: initial;

    fill: none;
    stroke: ${black};

    scale: 1;
    transition: scale ${transition};

    &:hover {
        scale: 1.03;
    }
`;
