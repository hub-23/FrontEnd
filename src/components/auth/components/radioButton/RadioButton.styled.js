import styled from 'styled-components';

export const StyledRadioButton = styled.div`
    & label {
    display: grid;
    grid-template-columns: 1em auto;
    gap: 20px;
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
