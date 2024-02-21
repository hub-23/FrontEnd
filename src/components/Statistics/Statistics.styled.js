import styled from 'styled-components';
import { device } from '../../styles/device';

export const StatisticsSection = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${( props ) => props.color || props.theme.colors.primary};

    @media ${device.sm} {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

export const StatisticsWrapper = styled.div`
    padding-left: 160px;
    padding-right: 160px;

    @media ${device.md} { 
        padding-left: 40px;
        padding-right: 40px;
    }
    @media ${device.sm} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const StatisticsList = styled.ul`
    max-width: 1440px; 
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

    @media ${device.sm} {
        max-width: 480px;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        gap: 0;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const StatUnit = styled.li`
    list-style: none;
    width: 265px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    line-height: 1.4;
    color: ${( props ) => props.color || props.theme.colors.white};
    text-align: center;
    &:nth-of-type(2) {
        order: 1;
    }
    &:last-of-type {
        order: 3;
    }

    @media ${device.md} { 
        width: 174px;
    }
    @media ${device.sm} { 
        width: 150px;
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

export const StatHeader = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 1.4;

    @media ${device.lg} { 
        font-size: 16px;
    }
    @media ${device.md} { 
        font-size: 14px;
    }
    @media ${device.sm} {
        font-weight: 400; 
        font-size: 14px;
    }
`;

export const StatValue = styled.span`
    display: block; 
    font-weight: 700;
    font-size: 36px;
    line-height: 1.4;
    letter-spacing: 0.36px;
    margin-bottom: 4px;

    @media ${device.lg} { 
        font-size: 22px;
    }
    @media ${device.md} { 
        font-size: 18px;
    }
    @media ${device.sm} {  
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 0.2px;
    }
`;
