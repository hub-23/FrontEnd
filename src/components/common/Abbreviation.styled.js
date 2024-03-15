import styled from 'styled-components';

export const Abbreviation = styled.p`
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: ${ ( { $fontSize } ) => $fontSize };
    font-weight: ${ ( { $fontWeight } ) => $fontWeight  };
    color: ${( props ) => props.color || props.theme.colors.white};
`;
