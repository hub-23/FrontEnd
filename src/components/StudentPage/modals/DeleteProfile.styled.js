import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    width: 800px;
    padding: 48px 160px;
    border-radius: 20px 0;
    background-color: ${props => props.color || props.theme.colors.white};
`;

export const Title = styled.h2`
    text-align: center;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};    
    font-size: 24px;
    font-weight: 500;
    line-height: calc(33.6 / 24);
`;
