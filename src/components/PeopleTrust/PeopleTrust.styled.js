import styled from 'styled-components';
import { device } from '../../styles/device';

export const MapContainer = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 1441px) { // від
        padding: 120px 205px;
    }
    @media ${device.xxl} { // до 1440
        padding: 120px 85px;
    }
    @media ${device.xl} { // до 1200
        padding: 80px 20px;
        
    }
`;

export const Wrapper = styled.div`
    max-width: 1030px;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.h2`
    margin-bottom: 40px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.24px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media ${device.xxl} { 
        margin-bottom: 32px;
    }
`;

export const Text = styled.p`
    margin-bottom: 50px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media screen and (max-width: 1090px) { 
        margin-bottom: 0;
    }
`;

export const MapWrapper = styled.div`
    @media screen and (min-width: 1090px) { 
        display: block;
        width: 1030px;
        margin-left: auto;
        margin-right: auto;
    }
    display: none;
`;

export const StatisticsWrapper = styled.div`
    background-color: ${( props ) => props.color || props.theme.colors.primary};
    padding: 80px 160px;
    @media ${device.xxl} { 
        padding: 40px 20px;
    }
`;

export const StatisticsList = styled.ul`
    max-width: 1440px; 
    margin-left: auto;
    margin-right: auto;
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

export const StatHeader = styled.p`
    font-size: 24px;
    font-weight: 500;
    @media ${device.xxl} { 
        font-size: 14px;
        font-weight: 400;
    }
`;

export const StatValue = styled.span`
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
