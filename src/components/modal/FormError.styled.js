import styled from 'styled-components';
import { accent } from '../../utils/variables.styled';

export const ErrorText = styled.p`
    display: inline;
    margin-left: ${( { $marginLeft } ) => $marginLeft || '19px'};

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: (15.82 / 14);

    color: ${accent};
`;
