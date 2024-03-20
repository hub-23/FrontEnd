import styled from 'styled-components';
import { transition } from '../../utils/variables.styled';

export const Container = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h3`
  //   width: 489px;
  //   height: 50px;
  white-space: nowrap;
  font-size: 36px;
  line-height: 140%;
  color: #2d2d2d;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  color: #2d2d2d;
`;

export const NavList = styled.ul`
  display: flex;
  margin-bottom: 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 371px;
    height: 50px;

    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: calc( 33.6 / 24 );
    border: 1px solid ${props => props.color || props.theme.colors.black};
    transition: background-color ${transition}, color ${transition};
  }

  li:first-child button {
    border-bottom-left-radius: 12px;
  }

  li:last-child button {
    border-top-right-radius: 12px;
  }

  .nav_list--btn {
    background-color: ${props => props.color || props.theme.colors.white};
    color: ${props => props.color || props.theme.colors.black};
  }

  .nav_list--btn.current {
    background-color: ${props => props.color || props.theme.colors.black};
    color: ${props => props.color || props.theme.colors.white};
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
