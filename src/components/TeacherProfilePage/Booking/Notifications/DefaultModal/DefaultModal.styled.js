import styled from 'styled-components';
import { Button } from 'components/common/button/Button';

export const ModalWindow = styled.div`
    position: relative;
    width: 768px;
    background-color: ${( { theme } ) => theme.colors.white };
    border-top-left-radius: 20px; 
    border-bottom-right-radius: 20px;
    padding: 48px 144px;
`;

export const Title = styled.p`
    font-size: 24px;
    line-height: 33px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 32px;
    text-align: left;
    `;

export const ButtonBox = styled.div`
    display: flex;
    gap: 20px;
    `;
    
export const VarButton = styled( Button )`
  width: 230px;
  height: 52px;
padding: 16px 40px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  
`;
