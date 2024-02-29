import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vw;
`;

export const StyledNavLink = styled( NavLink )`
  display: block;
  display: flex;
  width: 429px;
  height: 60px;
  color: #2d2d2d;
  padding: 16px 0px 16px 160px;

  &.active {
    border-radius: 0px 56px 56px 0px;
    background-color: #f9f9f9;
    color: #e3669c;
  }
`;

export const Image = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

export const Title = styled.h2`
  width: 245px;
  height: 28px;
  padding-left: 16px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
`;

export const Line = styled.hr`
  margin-left: 482px;
  margin-top: -26%;
  height: 554px;
  width: 1px;
  color: #f5f5f5;
`;
