import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vw;
`;

export const StyledList = styled.ul``;

export const StyledNavLink = styled( NavLink )`
  display: block;
  display: flex;
  width: 429px;
  height: 60px;
  color: ${props => props.color || props.theme.colors.black};
  padding: 16px 0px 16px 160px;

  &.active {
    border-radius: 0px 56px 56px 0px;
    background-color: #f9f9f9;
    color: ${props => props.color || props.theme.colors.accent};
    // &.logo {
    //   stroke: ${props => props.color || props.theme.colors.accent};
    // }
  }
`;

export const StyledTitle = styled.h2`
  width: 245px;
  height: 28px;
  padding-left: 16px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
`;

export const StyledDivider = styled.hr`
  margin-left: 482px;
  margin-top: -40%;
  height: 554px;
  width: 1px;
  color: #f5f5f5;
`;
