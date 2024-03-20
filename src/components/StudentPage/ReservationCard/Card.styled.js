import styled from 'styled-components';
import { Button } from '../../common/button/Button';
import { grayStroke, grayText } from '../../../utils/variables.styled';

export const Container = styled.li`
    display: flex;
    width: 740px;
    height: 268px;
    padding: 32px;
    border: 1px solid ${props => props.color || props.theme.colors.black};
    border-left: 8px solid ${ ( { theme, $status  } ) =>
        $status === 'active' ? theme.colors.accent : theme.colors.primary };
    border-radius: 0px 20px 0px 20px;
`;

export const GeneralInfo = styled.div`
    padding-right: 32px;
    border-right: 1px solid ${props => props.color || grayStroke};

    .personal-data {
        display: flex;
        align-items: center;
        margin-bottom: 76px;

        img {
            width: 80px;
            height: 80px;
            border-radius: 0 8px 0 8px;
            margin-right: 16px;
        }

        div {
            span {
                display: flex;
                gap: 6px;

                .name {
                    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
                    font-weight: 600;
                    font-size: 20px;
                    line-height: calc(28 / 20);
                }
            }
            .phone {
                font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
                font-weight: 400;
                font-size: 20px;
                line-height: calc(28 / 20);
            }
        }
    }
`;

export const TimeTable = styled.div`
    padding-left: 32px;
    div:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const FeedbackButton = styled( Button )`
    width: 298px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
`;

export const Static = styled.span`
    display: inline-block;
    width: 86px;
    margin-right: 16px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    line-height: calc(28 / 20);
    color: ${props => props.color || grayText};
`;

export const Dynamic = styled.span`
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    line-height: calc(28 / 20);
    color: ${props => props.color || props.theme.colors.black};
`;
