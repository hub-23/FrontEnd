import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../common/button/Button';

export const FormFild = styled( Form )`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

export const Section = styled.section`
  display: flex;
  gap: 48px;
  border: 1px dashed blue;
`;

export const Title = styled.h2`
  width: 172px;
  padding-top: 12px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 24px;
  font-weight: 500;
  line-height: calc(33.6 / 24);
  border: 1px dashed red;
`;

export const SaveBtn = styled( Button )`
  width: 213px;
  margin-top: 48px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc(20 / 20);
`;

export const DelAccauntSec = styled.section`
  margin-top: 72px;
  text-align: center;

  button {
    margin-bottom: 16px;
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.color || props.theme.colors.accent};
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: calc(28 / 20);
  }
  p {
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    line-height: calc(19.6 / 14);
  }
`;
