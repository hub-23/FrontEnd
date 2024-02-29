import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled( NavLink )`
  display: block;
  width: 429px;
  height: 60px;
  color: #2d2d2d;

  &.active {
    border-radius: 0px 56px 56px 0px;
    background-color: #f9f9f9;
    color: #e3669c;
  }
`;

// export const Image = styled.img`
//     width: 24px;
//     height: 24px;
// `;

export const Title = styled.h2`
  width: 245px;
  height: 28px;
  padding: 16px 0px 16px 160px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
`;
