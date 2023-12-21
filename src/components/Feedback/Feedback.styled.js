import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledSection = styled.section`
    border: 3px solid red;
    padding-top: 120px;
    padding-bottom: 96px;
    @media ${device.sm} {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const StyledContainer = styled.div`
    border: 1px solid green;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 160px;  
    @media ${device.sm} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
export const StyledContent = styled.div`
    border: 1px solid violet;
    margin: 0 auto;
    max-width: 1120px;
    /* @media ${device.sm} {
    } */
`;

export const StyledTitle = styled.h2`
    margin-bottom: 64px;
    font-family: Nunito;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.24px;
    color: rgba(45, 45, 45, 1);
`;

export const StyledCardsList = styled.ul`
    display: flex;
    gap: 20px;
    @media ${device.sm} {
        display: block;
    }
`;

export const StyledCard = styled.li`
    position: relative;
    width: 360px;
    height: 240px;
    border-radius: 0px 20px;
    border: 2px solid #113268;
    background: #F9F9F9;
    padding: 32px 24px 24px 24px;
`;

export const StyledStudentName = styled.h4`
    margin-bottom: 4px;
    font-family: Nunito;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: rgba(45, 45, 45, 1);
`;

export const StyledPhoto = styled.img`
    position: absolute;
    top: -40px;
    right: 80px;
    width: 100%;
    height: 100vw;
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;

    /* @media ${device.sm} {
        max-width: 240px;
        height: 240px;
    }  */
`;

export const StyledStarList = styled.ul`
    display: flex;
    gap: 8px; 
    margin-bottom: 8px;
`;

export const StyledTeacherNameWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
    align-items: center;
`;

export const StyledTeacherName = styled.p`
    cursor: pointer;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: rgba(17, 50, 104, 1);
`;

export const StyledFeedback = styled.p`
    margin-bottom: 8px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(45, 45, 45, 1);
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden; 
`;

export const StyledCardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledDate = styled.span`
    font-family: Nunito;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: rgba(45, 45, 45, 1);
`;

export const StyledDetailed = styled.p`
    cursor: pointer;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: rgba(17, 50, 104, 1);
`;

// const size = {
//     xs: 0,
//     sm: '576px',
//     md: '768px',
//     lg: '992px',
//     xl: '1200px',
//     xxl: '1440px',
//     xxxl: '2560',
//   };

//   export const device = {
//     xs: `(max-width: ${size.xs})`,
//     sm: `(max-width: ${size.sm})`,
//     md: `(max-width: ${size.md})`,
//     lg: `(max-width: ${size.lg})`,
//     xl: `(max-width: ${size.xl})`,
//     xxl: `(max-width: ${size.xxl})`,
//     xxxl: `(max-width: ${size.xxl})`,
//   };
