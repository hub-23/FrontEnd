import { Button } from 'components/common/button/Button';
import styled from 'styled-components';

export const NotifyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: ${( { theme } )=> theme.colors.black};
`;

export const NotifyIcon = styled.svg`
display: block;
margin-bottom: 32px;
`;

export const NotifyTitle = styled.h3`
font-size: 24px;
margin-bottom: 12px;
`;
export const NotifyDescription = styled.p`
font-size: 16px;
margin-bottom: 32px;
`;
export const BackHomeBtn = styled( Button )`
font-weight: 600;
font-size: 20px;
width: 480px;
height: 52px;
`;
