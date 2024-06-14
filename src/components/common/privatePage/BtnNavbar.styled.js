import styled from 'styled-components';
import { accent, lightGrey, transition } from 'utils/variables.styled';

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
