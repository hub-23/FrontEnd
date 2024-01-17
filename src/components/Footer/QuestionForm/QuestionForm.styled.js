import styled from 'styled-components';
import { Button } from '../../common/button/Button';

export const QuestionFormContainer = styled.div`
    position: absolute;
    width: 516px;
    /* height: 100%; */
    padding: 48px;
    background: ${( props ) => props.color || props.theme.colors.white};
    border-radius: 20px 0px;
    /* @media screen and (max-width: 455px) {
        width: 100%;
    }
    @media screen and (max-width: 370px) {
        padding: 16px 20px;
    } */
`;

export const Title = styled.h3`
    margin-bottom: 12px;
    align-items: center;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
    /* @media screen and (max-width: 455px) {
        font-size: 16px;
        margin-right: 15px;
    }
    @media screen and (max-width: 330px) {
        font-size: 14px;
        margin-right: 10px;
    } */
`;

export const Text = styled.p`
    margin-bottom: 20px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const SubmitBtn = styled( Button )`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    /* letter-spacing: 0.2px; */
    /* @media screen and (max-width: 480px) {
        height: 50px;
        border-radius: 20px 0;
    } */
`;
