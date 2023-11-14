import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 1440px;
    height: 720px;
    margin-top: 2036px;
    background: #113268;
    border: mixed solid;
    color: #ffffff;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${( props ) => props.direction || 'row'};
    align-items: ${( props ) => props.align || 'center'};
    justify-content: ${( props ) => props.justify || 'space-between'};
    gap: ${( props ) => props.gap || '1.25rem'};
    width: ${( props ) => props.width || '100%'};
    max-width: ${( props ) => props.maxwidth || '100%'};
`;

export const StyledTitle = styled.div`
    width: 399px;
    height: 62px;
    top: 2116px;
    left: 160px;
    font-family: Nunito;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #ffffff;
`;

export const StyledBtnContainer = styled.div``;

export const StyledContainer = styled.div``;

// export const StyledSlider = styled.div`
//     margin: 0 auto;
//     width: 100%;
//     height: 80vh;
// `;

// export const StyledTitleTypography = styled.h2`
//     font-family: Nunito;
//     font-size: 48px;
//     font-weight: 600;
//     line-height: 62px;
//     letter-spacing: 0.01em;
//     text-align: left;
//     color: #ffffff;
// `;
