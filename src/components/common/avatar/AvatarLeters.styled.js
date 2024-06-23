// K-Basket
import styled from 'styled-components';
const size = ( { $widthHeight } ) => $widthHeight || '80px';

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${size};
  height: ${size};

  background-color: ${props => props.color || props.theme.colors.accent};
  border-radius: 50%;
`;
