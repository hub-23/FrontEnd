import styled from 'styled-components';
import image from '../../images/bg-image.jpg';
import image2x from '../../images/bg-image-2x.jpg';

export const StyledSection = styled.section`
    position: relative;
    background-image: image-set(url(${image}) 1x, url(${image2x}) 2x);
    width: 100%;
    height: 900px;
    background-size: cover;
`;

export const StyledContainer = styled.div`
    padding: 180px 160px 145px 160px;
    height: 100%;
`;

export const StyledGradient = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 900px;
    background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.64) 0%,
        rgba(255, 255, 255, 0.13) 100%
    );
    /* background: linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%,
     rgba(255, 255, 255, 0.13) 100%); */
`;

export const StyledTitle = styled.h1`
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 52px; /* 52px */
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const StyledText = styled.p`
    width: 600px;
    margin-bottom: 40px;
`;

export const StyledButtContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 120px;
`;
