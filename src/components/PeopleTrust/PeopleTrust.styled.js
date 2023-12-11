import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledContainer = styled.div`
    border: 1px solid green;
`;

export const StyledTextWrapper = styled.div`
    border: 1px solid violet;
    padding: 120px 160px;
    @media ${device.xxl} { 
        padding: 80px 20px;
    }
`;

export const StyledTitle = styled.h2`
    margin-bottom: 40px;
    font-family: Nunito;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.24px;
    color: rgba(45, 45, 45, 1);
    @media ${device.xxl} { 
        margin-bottom: 32px;
    }
`;

export const StyledText = styled.p`
    font-family: Nunito;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: rgba(45, 45, 45, 1);
`;

export const StyledStatisticsWrapper = styled.div`
    background-color: rgba(17, 50, 104, 1);
    padding: 80px 160px;
    @media ${device.xxl} { 
        padding: 40px 20px;
    }
`;

export const StyledStatisticsList = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: center;
    @media ${device.md} { 
        margin-left: auto;
        margin-right: auto;
        max-width: 320px;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        gap: 0;
    }
`;

export const StyledStatUnit = styled.li`
    list-style: none;
    width: 265px;
    font-family: Nunito;
    line-height: 1.4;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    &:nth-of-type(2) {
        order: 1;
    }
    &:last-of-type {
        order: 3;
    }
    @media ${device.xxl} { 
        width: 150px;
    }
    @media ${device.md} { 
        -ms-flex-preferred-size: calc((100% - 20px) / 2);
        flex-basis: calc((100% - 20px) / 2);
        &:nth-of-type(odd) {
            margin-right: 20px;
        }
        &:nth-of-type(1) {
            margin-bottom: 32px; 
        }
        &:nth-of-type(2) {
            margin-bottom: 32px;
        }
        &:nth-of-type(3) {
            order: 2;
        }
    }
`;

export const StyledStatHeader = styled.p`
    font-size: 24px;
    font-weight: 500;
    @media ${device.xxl} { 
        font-size: 14px;
        font-weight: 400;
    }
`;

export const StyledStatValue = styled.span`
    display: block; 
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.36px;
    margin-bottom: 4px;
    @media ${device.xxl} {  
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: 0.2px;
    }
`;
