import styled from 'styled-components';

export const StyledTopTeachersButton = styled.button`
    width: 230px;
    height: 48px;
    top: 2130px;
    left: 1050px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;
    border-radius: 20px 0px;
    background: #ffffff;

    &:hover {
        border: 4px solid #ffffff;
    }

    &:active {
        box-shadow: 2px 2px 12px 0px rgba(255, 255, 255, 0.24), -2px -2px 12px 0px rgba(255, 255, 255, 0.24);
    }

    &:disabled {
        background: #d5d5d5;
    }

    @media (min-width: 0px) and (max-width: 768px) {
        position: absolute;
        min-width: 100%;
    }
`;

export const ButtonTypography = styled.p`
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #113268;
    white-space: nowrap;
`;

export const ButtonToggle = styled.button`
    border: none;
    width: 32px;
    height: 32px;
    top: 2142px;
    left: 1344px;
    background: #113268;
    color: #ffffff;
    margin: 0px 60px;

    @media (min-width: 0px) and (max-width: 768px) {
        margin: 0px 20px;
    }
`;
