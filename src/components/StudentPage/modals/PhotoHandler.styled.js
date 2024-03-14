import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    /* height: 482px; */
    padding-top: 64px;
    padding-bottom: 64px;
    border-radius: 20px 0;
    background-color: ${props => props.color || props.theme.colors.white};
`;

export const Title = styled.h2`
    margin-bottom: 32px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};    
    font-size: 32px;
    line-height: calc(38 / 32);
`;

export const CircleWrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 32px;
    background-color: ${props => props.color || props.theme.colors.accent};

    /* img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    } */
`;

export const ImageWrapper = styled.div`
    max-width: 358px;
    max-height: 358px;
    margin-bottom: 32px;
    border: 1px solid ${props => props.color || props.theme.colors.accent};

    img {
        width: 100%;
        height: 358px;
        object-fit: cover;
    }
`;

export const AddButton = styled.label`
    position: relative;

    button {
        font-family: ${props => props.fontFamily || props.theme.fontFamily.primary}; 
        font-size: 20px;
        font-weight: 600;
        line-height: calc(20 / 20);
        color: ${props => props.color || props.theme.colors.primary};
    }
`;
