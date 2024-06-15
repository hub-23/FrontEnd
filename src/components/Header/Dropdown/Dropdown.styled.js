import styled, { keyframes } from 'styled-components';
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
  position: absolute;
  /* bottom: -345px; */
  top: 60px;
  right: 0px;
  width: 400px;
  /* height: 320px; */
  border-radius: 20px 0;
  padding: 36px 40px;
  padding-right: 0;
  background-color: ${props => props.color || props.theme.colors.white};
  box-shadow: 0px -1px 4px 0px rgba(45, 45, 45, 0.05),
    4px 4px 4px 0px rgba(45, 45, 45, 0.2),
    -2px 0px 4px 0px rgba(45, 45, 45, 0.05);
  animation: ${show} ${transitionB};
`;

export const PersonalData = styled.div`
  display: flex;
  margin-bottom: 20px;

  .meta-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-family: ${props =>
        props.fontFamily || props.theme.fontFamily.primary};
      font-size: 20px;
      font-weight: 500;
      line-height: calc(28 / 20);
    }
    .email {
      font-family: ${props =>
        props.fontFamily || props.theme.fontFamily.primary};
      font-size: 14px;
      font-weight: 400;
      line-height: calc(19.6 / 14);
    }
  }
`;

// K-Basket

export const DataUser = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Name = styled.p`
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 500;
  line-height: calc(28 / 20);
`;

export const Email = styled.p`
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: calc(19.6 / 14);
`;
