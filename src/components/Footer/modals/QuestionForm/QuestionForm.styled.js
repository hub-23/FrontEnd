import styled, { keyframes } from 'styled-components';
import { Form } from 'formik';
import { device } from '../../../../styles/device';
import { Button } from '../../../common/button/Button';
import { transitionB } from '../../../../utils/variables.styled';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const QuestionFormContainer = styled.div`
    position: absolute;
    max-width: 800px;
    margin: 0 20px;
    max-height: 95%;
    padding: 48px 160px 50px 160px;
    border-radius: 20px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: ${( props ) => props.color || props.theme.colors.white};  
    animation: ${ show } ${ transitionB };

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(18, 20, 23, 0.05); 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(18, 20, 23, 0.1); 
    }
    @media ${device.md} {  
        max-width: 516px;
        padding: 48px;
    }
    @media ${device.sm} {  
        max-width: 360px;
        max-height: 100%;
        padding: 32px 20px;
    }
`;

export const Title = styled.h3`
    margin-bottom: 12px;
    text-align: center;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.sm} {
        font-size: 20px;
    }
`;

export const Text = styled.p`
    margin-bottom: 20px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.sm} {
        font-size: 16px;
    }
`;

export const FormFild = styled( Form )`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const WrappWarningText = styled.div`
    position: absolute;
    bottom: 75px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 4px;

    @media ${device.sm} {
        bottom: 65px;
        padding-left: 0;
    }
`;

export const WarningText = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    line-height: calc(15.82 / 14);
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.sm} {
        font-size: 14px;
    }
`;

export const SubmitBtn = styled( Button )`
    width: 100%;
    height: 60px;
    margin-top: 32px;
    border-radius: 16px 0;
    
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 1%;

    @media ${device.sm} {
        height: 50px;
        border-radius: 20px 0;

        font-size: 16px;
        font-weight: 500;
    }
`;
