import styled from 'styled-components';

export const Abbreviation = styled.p`
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: ${( { $fontSize } ) => $fontSize || '24px'};
  font-weight: 500;
  line-height: 1.4;

  /* font-size: ${( { $fontSize } ) => $fontSize};
    font-weight: ${( { $fontWeight } ) => $fontWeight};
    line-height: ${( { $lineHeight } ) => $lineHeight}; */

  color: ${props => props.color || props.theme.colors.white};
`;
