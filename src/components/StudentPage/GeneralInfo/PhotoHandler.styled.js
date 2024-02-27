import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 800px;
    height: 482px;
    border-radius: 20px 0;
    background-color: ${props => props.color || props.theme.colors.white};
`;
