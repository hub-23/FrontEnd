import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 330px;
  height: 60px;

  /* border: 1px solid rgba(45, 45, 45, 1); */
  border-radius: 20px 0px 20px 0px;
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-align: center;
  outline: none;
  cursor: pointer;

  ${(props) => props.primary && css`
    color: ${(props) => props.color || props.theme.colors.black};
    background: ${(props) => props.background || props.theme.colors.white};
    border: 1px solid ${(props) => props.border || props.theme.colors.black};
    width: ${(props) => props.width || '356px'};
    `}
  ${(props) => props.secondary && css`
    color: ${(props) => props.color || props.theme.colors.white};
    background: ${(props) => props.background || props.theme.colors.black};
    border: 1px solid ${(props) => props.border || props.theme.colors.black};
    width: ${(props) => props.width || '329px'};
    `}
    ${(props) => props.pink && css`
    color: ${(props) => props.color || props.theme.colors.white};
    background: ${(props) => props.background || props.theme.colors.liner_pink};
    border: 1px solid ${(props) => props.border || 'transparent'};
    width: ${(props) => props.width || '329px'};
    `}
    ${(props) => props.blue && css`
    color: ${(props) => props.color || props.theme.colors.white};
    background: ${(props) => props.background || props.theme.colors.liner_blue};
    border: 1px solid ${(props) => props.border || 'transparent'};
    width: ${(props) => props.width || '356px'};
    `}
${(props) => props.grey && css`
    width: 217px; 
    color: ${(props) => props.color || props.theme.colors.white};
    border: 1px solid ${(props) => props.color || props.theme.colors.grey};
    background: ${(props) => props.background || props.theme.colors.grey};
    `}
    ${(props) => props.transparent && css`
    color: ${(props) => props.color || props.theme.colors.black};
    border: 1px solid ${(props) => props.color || '#E3669C'};
    background: ${(props) => props.background || props.theme.colors.white};
    width: ${(props) => props.width || '60px'};
    align-self: ${(props) => props.align || 'center'};
    `}
`;

export default StyledButton;
