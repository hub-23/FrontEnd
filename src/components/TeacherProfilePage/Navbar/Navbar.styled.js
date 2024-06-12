import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { accent, black, lightGrey, transition } from 'utils/variables.styled';

export const Link = styled( NavLink )`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 24px 16px 160px;
  margin-right: 53px;

  border-radius: 0 56px 56px 0;
  color: ${black};
  transition: background-color ${transition}, color ${transition};

  &.active {
    color: ${accent};
    background-color: ${lightGrey};
  }
`;

export const Text = styled.h3`
  font-size: 20px;
  line-height: calc(28 / 20);
`;

export const Btn = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 165px 16px 160px;

  border-radius: 0 56px 56px 0;

  border: none;
  background-color: initial;
  transition: background-color ${transition};

  &:hover {
    /* color: ${accent}; */
    background-color: ${lightGrey};
  }
`;
