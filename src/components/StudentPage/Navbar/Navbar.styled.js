import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/device';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vw;

  @media ${device.md} {
    min-height: auto;
  }
`;

export const StyledNavLink = styled( NavLink )`
  display: block;
  display: flex;
  width: 429px;
  height: 60px;
  color: ${props => props.color || props.theme.colors.black};
  padding: 16px 0px 16px 160px;

  @media ${device.md} {
    width: auto;
    height: auto;
    padding: 0;
    margin-right: 22px;
  }

  @media ${device.sm} {
    margin-right: 15px;
  }

  svg {
    @media ${device.md} {
      display: none;
    }
  }

  &.active {
    border-radius: 0px 56px 56px 0px;
    background-color: #f9f9f9;
    color: ${props => props.color || props.theme.colors.accent};

    @media ${device.md} {
      border-radius: 0;
      background-color: inherit;
      color: ${props => props.color || props.theme.colors.primary};
      border-width: 2px;
      border-bottom-style: solid;
      border-color: ${props => props.color || props.theme.colors.primary};
    }

    svg {
      path {
        stroke: ${props => props.color || props.theme.colors.accent};
      }
    }
  }
`;
export const StyledList = styled.ul`
  @media ${device.md} {
    display: flex;
    padding-inline: 40px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.08);
  }

  @media ${device.sm} {
    padding-inline: 20px;
  }
`;

export const StyledNavLinkDrop = styled( StyledNavLink )`
  width: 360px;
  padding: 16px 0px 16px 16px;

  @media ${device.md} {
    width: auto;
    padding: 0;
  }

  &.active {
    border-radius: 56px 0px 0px 56px;
  }
`;

export const StyledTitle = styled.h2`
  width: 245px;
  height: 28px;
  padding-left: 16px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  line-height: calc(28 / 20);

  @media ${device.md} {
    width: auto;
    height: auto;
    padding: 0;
  }

  @media ${device.sm} {
    font-size: 16px;
    font-weight: 400;
    line-height: calc(22.4 / 16);
  }
`;

export const StyledButton = styled.button`
  width: 245px;
  height: 28px;
  display: flex;
  justify-content: start;
  background-color: transparent;
  border: none;
  padding-left: 16px;
  white-space: nowrap;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: calc(28 / 20);

  @media ${device.md} {
    width: auto;
    height: auto;
    padding: 0;
  }

  @media ${device.sm} {
    font-size: 16px;
    font-weight: 400;
    line-height: calc(22.4 / 16);
  }
`;

export const StyledDivider = styled.hr`
  margin-left: 482px;
  margin-top: -179px;
  height: 554px;
  width: 1px;
  color: #f5f5f5;

  @media ${device.md} {
    display: none;
  }
`;
