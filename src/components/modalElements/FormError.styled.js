import styled from 'styled-components';
import { accent } from '../../utils/variables.styled';

export const ErrorText = styled.p`
    display: inline;
    margin-left: ${( { $marginLeft } ) => $marginLeft || '19px'};

    line-height: (15.82 / 14);

    color: ${accent};
`;
