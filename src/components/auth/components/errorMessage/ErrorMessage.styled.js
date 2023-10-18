import styled from 'styled-components';

export const Errors = styled.span`
font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};;
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

/* margin-left: 20px; */
margin: 10px 0px 10px 20px;
& img {
height: 16px;
width: 16px;
}
`;
