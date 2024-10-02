import styled from 'styled-components';
import { Button } from '../../common/button/Button';
import { grayStroke, grayText } from '../../../utils/variables.styled';
import { device } from 'utils/device';

export const Container = styled.li`
    display: flex;
    width: 740px;
    height: 268px;
    padding: 32px;
    border: 1px solid ${props => props.color || props.theme.colors.black};
    border-left: 8px solid ${ ( { theme, $status  } ) =>
        $status === 'active' ? theme.colors.accent : theme.colors.primary };
    border-radius: 0px 20px 0px 20px;

    @media ${device.md} {
      width: auto;
      height: auto;
      padding: 24px 28px;
      flex-direction:column;
    }
`;

export const GeneralInfo = styled.div`
    padding-right: 32px;
    border-right: 1px solid ${props => props.color || grayStroke};

    @media ${device.md} {
      border:none;
      border-bottom: 1px solid ${props => props.color || grayStroke};
      padding-bottom: 20px;
      padding-right: 0px;
    }

    .personal-data {
        display: flex;
        align-items: center;
        margin-bottom: 76px;

      @media ${device.md} {
        margin-bottom: 0px;
      }

        img {
            width: 80px;
            height: 80px;
            border-radius: 0 8px 0 8px;
            margin-right: 16px;

          @media ${device.md} {
                width: 64px;
                height: 64px;
                border-radius: 0 8px 0 8px;
                margin-right: 16px;
          }
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

      @media ${device.md} {
        font-size: 16px;
      }
                }
            }
            .phone {
                font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
                font-weight: 400;
                font-size: 20px;
                line-height: calc(28 / 20);

      @media ${device.md} {
        font-size: 16px;
      }
            }
        }
    }
`;

export const TimeTable = styled.div`
    padding-left: 32px;
    div:not(:last-child) {
        margin-bottom: 16px;
    }

    @media ${device.md} {
      padding: 12px 0;
      border-bottom: 1px solid ${props => props.color || grayStroke};
      margin-bottom:20px;
    }
`;

export const FeedbackButton = styled( Button )`
    width: 298px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;

    @media ${device.md} {
      display:none;
    }
`;

export const FeedbackButtonMobile = styled( Button )`
    display:none;
    width: 384px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;

    @media ${device.md} {
      display: block;
    }

    @media ${device.sm} {
      width: 244px;
    }
`;

export const Static = styled.span`
    display: inline-block;
    width: 86px;
    margin-right: 16px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    line-height: calc(28 / 20);
    color: ${props => props.color || grayText};

@media ${device.md} {
        font-size: 16px;
      }
`;

export const Dynamic = styled.span`
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    line-height: calc(28 / 20);
    color: ${props => props.color || props.theme.colors.black};

@media ${device.md} {
        font-size: 16px;
      }
`;
