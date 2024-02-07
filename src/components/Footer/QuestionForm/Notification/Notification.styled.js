import styled from 'styled-components';
import { device } from '../../../../styles/device';
import { borderGreen } from '../../../../utils/variables.styled';

export const NotificationWrapper = styled.div`
    position: absolute;
    max-width: 800px;
    height: 382px;
    margin: 0 20px;
    padding: 48px 160px;
    border-radius: 20px 0px;
    background: ${( props ) => props.color || props.theme.colors.white};  

    @media ${device.md} {  
        max-width: 516px;
    }
    @media ${device.sm} {  
        max-width: 360px;
    }
`;

export const IconWrapper = styled.div`
    width: 67px;
    height: 67px;
    border: 1px solid ${borderGreen};
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;


    @media ${device.md} {  
        max-width: 516px;
    }
    @media ${device.sm} {  
        max-width: 360px;
    }
`;
