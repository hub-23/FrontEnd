// K-Basket
import styled from 'styled-components';
const size = ( { $widthHeight } ) => $widthHeight || '80px';

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 64px;
  height: 64px; */

  width: ${size};
  height: ${size};

  /* width: ${( { $width } ) => $width || '80px'};
  height: ${( { $height } ) => $height || '80px'}; */

  /* width: ${( { $dropdown } ) => ( $dropdown ? '64px' : '32px' )}; */
  /* height: ${( { $dropdown } ) => ( $dropdown ? '64px' : '32px' )}; */
  /* margin-right: ${( { $dropdown } ) => ( $dropdown ? '12px' : '8px' )}; */
  background-color: ${props => props.color || props.theme.colors.accent};
  border-radius: 50%;
`;
