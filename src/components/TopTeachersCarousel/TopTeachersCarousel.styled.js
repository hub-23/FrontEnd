import styled from 'styled-components';

export const StyledSection = styled.section`
    min-width: 100%;
    max-width: 1440px;
    max-height: 720px;
    min-height: 100%;
    margin-top: 2036px;
    margin-bottom: 30px;
    overflow: hidden;
    background: #113268;
    color: #ffffff;
    @media (max-width: 768px) {
        max-width: 360px;
        min-width: 100%;
        height: 555px;
        max-height: 100%;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
`;

export const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    @media (max-width: 768px) {
        margin-top: 48px;
    }
`;

export const StyledTitle = styled.div`
    width: 399px;
    height: 62px;
    top: 2116px;
    padding-left: 160px;
    @media (max-width: 970px) {
        padding-left: 40px;
    }
    @media (max-width: 768px) {
        width: 200px;
        height: 31px;
        padding-left: 20px;
    }
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

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.25rem;
    max-width: 100%;
    @media (min-width: 768px) {
        display: block;
        min-width: 100%;
    }

    // display: none;
    // @media (min-width: 768px) {
    //     display: block;
    //     min-width: 100%;
    // }
`;
