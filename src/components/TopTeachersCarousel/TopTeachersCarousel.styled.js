import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 1440px;
    height: 720px;
    margin-top: 2036px;
    // margin: 0 auto;
    background: #113268;
    border: mixed solid;
    color: #ffffff;
    height: 100%;
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
    //padding-left: 160px;
`;

export const StyledBtnContainer = styled.div``;

export const StyledContainer = styled.div``;

export const StyledTitleTypography = styled.h2`
    font-family: Nunito;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    padding-left: 160px;
`;
