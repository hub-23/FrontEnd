import styled from 'styled-components';

export const StyledSection = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 720px;
    max-height: 100%;
    margin: 2036px auto 78px;
    overflow: hidden;
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
    padding-left: 160px;
`;

export const StyledContainer = styled.div`
    margin-top: 80px;
`;

export const StyledTitleTypography = styled.h2`
    font-family: Nunito;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
`;
