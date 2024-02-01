import styled from 'styled-components';
import { accent } from '../../../../utils/variables.styled';

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
`;
