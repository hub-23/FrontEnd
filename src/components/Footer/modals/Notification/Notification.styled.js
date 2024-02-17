import styled from 'styled-components';
import { device } from '../../../../styles/device';
import { borderGreen, accent } from '../../../../utils/variables.styled';
import { Button } from '../../../common/button/Button';

export const NotificationWrapper = styled.div`
    position: absolute;
    max-width: 800px;
    margin: 0 20px;
    padding: 48px 160px;
    border-radius: 20px 0px;
    background: ${( props ) => props.color || props.theme.colors.white};  

    @media ${device.md} {  
        max-width: 480px;
        padding: 48px 40px;
    }
    @media ${device.sm} {  
        display: flex;
        flex-direction: column;
        max-width: 100%;
        height: 100%;
        margin: 0;
        padding: 32px 20px;
        border-radius: 0;
    }
`;

export const IconWrapper = styled.div`
    width: 67px;
    height: 67px;
    border-width: 1px;
    border-style: solid;
    border-color: ${( props ) => props.$success ? borderGreen : accent };
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.md} {  
        width: 60px;
        height: 60px;
    }
`;

export const KeyMessage = styled.p`
    margin-top: 32px;
    margin-bottom: 12px;
    text-align: center;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.md} {  
        margin-top: 20px;
        font-size: 24px;
    }
    @media ${device.sm} {  
        margin-top: 32px;
        font-size: 20px;
    }
`;

export const Details = styled.p`
    margin-bottom: 32px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const LinkBtn = styled( Button )`
    width: 100%;
    height: 52px;
    border-radius: 20px 0;
    
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 1%;

    @media ${device.md} {  
        height: 60px;
    }
    @media ${device.sm} {  
        font-size: 16px;
        font-weight: 500;
        height: 50px;
        margin-top: auto;
    }
`;
