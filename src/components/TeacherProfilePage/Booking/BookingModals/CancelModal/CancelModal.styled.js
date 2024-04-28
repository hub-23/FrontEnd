import styled from 'styled-components';

export const Title = styled.p`
font-size: 24px;
line-height: 33px;
font-weight: bold;
margin-bottom: 16px;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 32px;
    `;
export const ButtonBox = styled.div`
    display: flex;
    gap: 20px;
    `;
    
export const Button = styled.button`
  width: 230px;
  padding: 16px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(87.92deg, #09194D 0%, #234890 100%);
  border-image-slice: ${( { yesBtn } ) => yesBtn ? 0 : 1 };
  
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  background: ${( { yesBtn, theme } ) => yesBtn ? theme.colors.liner_blue : 'transparent' };
`;
