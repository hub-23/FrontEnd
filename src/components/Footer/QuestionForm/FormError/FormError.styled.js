import styled, { keyframes } from 'styled-components';
import { accent } from '../../../../utils/variables.styled';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ErrorText = styled.p`
    position: absolute;
    display: inline;
    margin-left: ${( { $isMarginLeft } ) => ( $isMarginLeft ? '19px' : '0' )};

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: (15.82px / 14px);

    color: ${accent};
    animation: ${ show } 0.5s cubic-bezier(0, 0.1, 0.2, 1) 1;
`;
