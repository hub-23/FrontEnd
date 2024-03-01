import styled, { keyframes } from 'styled-components';
import { device } from '../../../utils/device';
import { transitionB } from '../../../utils/variables.styled';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Dropdown = styled.div`
  background-color: ${props => props.color || props.theme.colors.white};
  position: absolute;
  top: 60px;
  z-index: 2;
  margin-top: 4px;
  padding: 20px 0;
  width: 100%;
  border-radius: 20px 0px;
  box-shadow: 0px -1px 4px 0px rgba(45, 45, 45, 0.05),
    4px 4px 4px 0px rgba(45, 45, 45, 0.2),
    -2px 0px 4px 0px rgba(45, 45, 45, 0.05);
  animation: ${show} ${transitionB};
  & > ul > li {
    padding: 5px 36px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    line-height: 1.4;
    color: ${props => props.color || props.theme.colors.black};
    &:not(:last-child) {
      margin-bottom: 2px;
    }
  }

  @media ${device.md} {
    top: 48px;
  }
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #f9f9f9;
  }
`;
