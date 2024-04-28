import styled from 'styled-components';

export const ModalWindow = styled.div`
    position: relative;
    width: 768px;
    height: 342px;
    background-color: ${( { theme } ) => theme.colors.white };
    border-top-left-radius: 20px; 
    border-bottom-right-radius: 20px;
    padding: 48px 144px;
    text-align: center;
`;
