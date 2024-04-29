import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Navigation = styled.nav`
    padding-right: 77px;
    border-right: 1px solid ${( { theme } ) => theme.colors.grayStroke };
`;

export const NavBarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  font-size: 28px;
  line-height: 28px;

`;
export const StyledLink = styled( NavLink )`
  color: ${( { theme } ) => theme.colors.black };
  text-decoration: none;
  padding-bottom: 1px;
  &.active {
          color: ${ ( { theme } ) => theme.colors.accent}; 
      }
`;
