import styled from 'styled-components';

export const Flex = styled.div` 
display: flex;
flex-direction: column;
/* padding-bottom:30px; */
height: 90px;

/* margin-bottom:30px; */
`;

export const StyledInput = styled.input`
  width: 701px;
  height: 60px;
  border-radius: 20px 0px 20px 0px;
  border: 1px;
  border: 1px solid #2D2D2D33;
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 43px;
  background:  #FFFFFF;
  outline: none;
    &:focus {
      outline:  1px solid #0360AB;
  }`;

export const Errors = styled.span`
font-family: ${(props) => props.fontFamily || props.theme.fontFamily.primary};;
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #343232;

display:flex;
align-items:center;
justify-content:start;
gap:10px;

margin-left: 20px;
`;
