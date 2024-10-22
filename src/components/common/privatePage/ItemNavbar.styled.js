import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  accent,
  black,
  lightGrey,
  primary,
  transition,
} from 'utils/variables.styled';
import { device } from 'utils/device';

export const Link = styled( NavLink )`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: ${( { $padding } ) => $padding || '16px 24px 16px 160px'};

  border: 1px solid transparent;
  border-radius: ${( { $borderRadius } ) => $borderRadius || '0 56px 56px 0'};
  color: ${black};
  transition: background-color ${transition}, color ${transition};

  &.active {
    color: ${accent};
    background-color: ${lightGrey};
  }

  svg {
    @media ${device.md} {
      display: none;
    }
  }

  @media ${device.xl} {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 1px;
    border: none;
    border-bottom: 1px solid transparent;
    border-radius: 0;
    transition: border ${transition}, color ${transition};

    &.active {
      color: ${primary};
      background-color: transparent;
    }

    &:hover {
      color: ${primary};
      border-color: ${primary};
    }
  }

  @media ${device.md} {
    padding: 0px 0px 1px;
  }
`;

export const Text = styled.h3`
  font-size: 20px;
  line-height: calc( 28 / 20 );
  font-weight: 400;

  @media ${device.sm} {
    font-size: 16px;
    line-height: calc(22.4 / 16);
  }
`;
