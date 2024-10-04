import styled from 'styled-components';
import { device } from 'utils/device';
import { accent, primary, transition } from 'utils/variables.styled';

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

  svg {
    @media ${device.md} {
      display: none;
    }
  }

  @media ${device.xl} {
    padding: 16px 10px 1px;
    border-bottom: 1px solid transparent;
    border-radius: 0;
    transition: border ${transition}, color ${transition};

    &.active {
      color: ${primary};
      background-color: transparent;
    }

    &:hover{
      color: ${primary};
      border-color: ${primary};
    }
  }

  @media ${device.md} {
    font-size: 16px;
    padding: 0px 0px 1px;
  }
`;
