import styled from 'styled-components';

export const EmptyBookingMessageBox = styled.div`
text-align: center;
color: ${( { theme } ) => theme.colors.black};
font-weight: 400;
font-size: 20px;
line-height: 28px;
`;
export const EmptyBookingMessageTitle = styled.h3`
font-weight: 700;
font-size: 36px;
line-height: 50px;
`;
export const ViewMoreBox = styled.div`
margin: 0 auto;
width: 167px;
`;
export const ViewMoreMessage = styled.p`
font-weight: 600;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.01em;
color: ${( { theme } )=> theme.colors.primary};
margin-bottom: 8px;
`;
export const ViewMoreButton = styled.button`
background-color: transparent;
padding: 0;
border:none;
display: block;
margin: 0 auto;
cursor: pointer;
 transform: ${( { viewMore } ) => viewMore ? 'rotate(0)' : 'rotate(180deg)'};
transition: transform ease-in-out 0.3s;
`;

