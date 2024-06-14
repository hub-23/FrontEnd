import styled from 'styled-components';
import { accent, transition } from 'utils/variables.styled';

export const Btn = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: ${( { $padding } ) => $padding || '16px 165px 16px 160px'};

  border: none;
  background-color: initial;
  transition: color ${transition};

  &:hover {
    color: ${accent};
  }
`;
