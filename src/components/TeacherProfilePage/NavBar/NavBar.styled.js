import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'utils/device';


export const Navigation = styled.nav`
    margin: 0 auto;
    padding-right: 77px;
    border-right: 1px solid ${( { theme } ) => theme.colors.grayStroke };
`;

export const NavBarList = styled.ul`
  /* padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
      width: 576px; */

  display: flex;
  flex-direction: column;
  gap: 32px;

  font-size: 28px;
  line-height: 28px;


  /* @media ${device.sm} {
      width: 480px;
    } */
`;
export const StyledLink = styled( NavLink )`
  color: ${( { theme } ) => theme.colors.black };
  text-decoration: none;
  padding-bottom: 1px;
  &.active {
          color: ${ ( { theme } ) => theme.colors.accent}; 
      }
`;
