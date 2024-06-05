import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../../common/button/Button';
import { device } from '../../../utils/device';
import { grayText } from '../../../utils/variables.styled';

export const Container = styled.div`
    position: relative;
    width: 800px;
    margin: 0 20px;
    padding: 48px 160px;
    border-radius: 20px 0;
    background-color: ${props => props.color || props.theme.colors.white};

    @media ${device.sm} {
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 0;
      padding: 40px 20px 32px 20px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 32px;
    text-align: center;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};    
    font-size: 24px;
    font-weight: 500;
    line-height: calc(33.6 / 24);

    @media ${device.sm} {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 500;
      line-height: calc(28 / 20);
    }
`;

export const FormField = styled( Form )`
    @media ${device.sm} {
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  margin-top: 28px;
  margin-bottom: 40px;
  display: flex;
  gap: 10px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  color: ${( props ) => props.color || grayText };

  svg {
    stroke: none;
    fill: none;
    width: 20px;
    height: 20px;
    border: 1.5px solid #0C0507;
    border-radius: 6px;
    padding: 5px 4px;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  } 

  input:checked + svg {
    stroke: #0C0507;
  }
  
  span {
    position: absolute;
    bottom: -22px;
    color: ${props => props.color || props.theme.colors.accent};
  }

  @media ${device.sm} {
    margin-top: 24px;
    margin-bottom: 0;
    gap: 8px;

    span {
      position: static;
    }
  }
`;

export const DeleteBtn = styled( Button )`
  width: 100%;
  height: 52px;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc( 20/20 );

  @media ${device.sm} {
    height: 50px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: calc( 22.4/16 );
  }
`;

export const CancelBtn = styled( Button )`
  width: 100%;
  height: 52px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc( 20/20 );

  @media ${device.sm} {
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    line-height: calc( 22.4/16 );
  }
`;
