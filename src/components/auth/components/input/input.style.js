import styled from 'styled-components';

export const Flex = styled.div` 
display: flex;
flex-direction: column;
/* padding-bottom:30px; */
height: 90px;
width: 100%;
/* margin-bottom:30px; */

& input[aria-invalid='true'] {
  outline:  1px solid #E3669C;
      /* border: 1px solid #E3669C; */
}
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 20px 0px 20px 0px;
  border: 1px;
  border: 1px solid #2D2D2D33;
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
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
      };

    &:valid {
      outline:  1px solid #A4D5BE;
      /* border: 1px solid #A4D5BE; */
      };

    &:invalid {
      outline:  1px solid #E3669C;
      /* border: 1px solid #E3669C; */
      };
  `;


