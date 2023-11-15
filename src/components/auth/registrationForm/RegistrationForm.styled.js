import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
flex-direction :${( props ) => props.direction || 'row'};
align-items:  ${( props ) => props.align || 'center'};
justify-content:${( props ) => props.justify || 'space-between'};
gap: ${( props ) => props.gap || '1.25rem'};
margin-bottom:30px;
width:${( props ) => props.width || '100%'};
max-width:${( props ) => props.maxwidth || '100%'};
`;


export const StyledCheckBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:start;
/* padding-bottom:30px; */
height: 90px;
width: 100%;
  height: 60px;
  border-radius: 20px 0px 20px 0px;
  border: 1px;
  border: 1px solid #2D2D2D33;
  /* font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary}; */
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 20px;
  background:  #FFFFFF;
  outline: none;
  gap: 10px;
  margin-bottom:30px;
  & input {
  margin-left:10px;
  }
`;

export const StyledForm = styled.form`
display: flex;
justify-content:space-between;
align-items:start;
gap:100px;
`;

export const Typography = styled.p`
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.secondary};
  font-size: ${( props ) => props.size || '14px'};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #151414;
  max-width:93%;
  text-align: start;
  margin: 0 auto;
& a {
  color: #151414;
  text-decoration: underline;
};

& span {
  display: block;
  font-family: 'Nunito';
font-size: 20px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #000000;
}
`;

export const RadioButton = styled.div`
    & label {
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    font-family: 'Nunito';
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;     color: #2D2D2D;
    margin-top: 1em;
    cursor: pointer;
      };
    & input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff;
  margin: 0;
  font-family: inherit;
  color: currentColor;
  width: 24px;
  height: 24px;
  border: 1px solid #E3669C;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;   position: relative;
    };
  & input[type="radio"]:before {
  content: "";
  width: 12px;
  height:  12px;
  transform: translate(50%, 50%);
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: #E3669C;
    };

    & input[type="radio"]:checked::before {
  transform: scale(1);
    }; 
`;

export const StyledLink = styled.div`
font-family: "Nunito";
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
`;
