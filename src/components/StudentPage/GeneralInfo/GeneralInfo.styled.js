import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 40px;
`;

export const ProfilePhoto = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    .circle {
        position: relative;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid ${( props ) => props.color || props.theme.colors.accent};        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .text p:nth-child(1) {
        margin-bottom: 8px;
        font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
        font-size: 20px;
        line-height: calc(28 / 20);
    }
    .text p:nth-child(2) {
        font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
        line-height: calc(19.6 / 14);
    }

    button {
        position: absolute;
        right: 0%;
        bottom: 0;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-color: transparent;
        border-radius: 50%;
        background-color: #F9F9F9;

        svg {
            fill: none;
        }
        svg.active {
            display: none;
        }
        &:hover,
        &:focus,
        &:active {
            svg.default {
                display: none;
            }
            svg.active {
                display: block;
            }
        }
    }
`;
