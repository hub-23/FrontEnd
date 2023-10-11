import styled from 'styled-components';


export const StyledLabel = styled.label`
display: block;
margin-bottom:30px;
margin-left:30px;
font-family: ${ ( props ) => props.fontFamily || props.theme.fontFamily.secondary};
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0em;
color: #151414;
& a {
  color: #151414;
  text-decoration: underline;
};
& input {
margin-right:10px;
  };
`;
