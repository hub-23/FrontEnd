import styled from 'styled-components';

import searchImg from '../../images/search.svg';
import locationImg from '../../images/location.svg';

export const StyledInputs = styled.div`
  width: 1120px;
  height: 80px;
  border-radius: 20px 0px;
  border: 1px solid #d5d5d5;
  display: flex;
  overflow: hidden;
  background: #fff;
`;

export const StyledInput = styled.input`
  all: unset;
  flex-grow: 1;
  background-image: url(${searchImg});
  background-repeat: no-repeat;
  background-position: 16px center;
  border-right: 1px solid black;
  padding-left: 56px;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  cursor: pointer;
  font-size: 16px;
`;

export const StyledCheckbox = styled.input`
  appearance: none; /* Убираем стандартный стиль браузера */
  width: 24px;
  height: 24px;
  border: 2px solid #e3669c;
  border-radius: 50%;
  outline: none; /* Убираем обводку при фокусе */
  cursor: pointer;
  padding-left: 20px;

  /* Стили для "галочки" при выборе */
  &:checked {
    background-color: #3498db;
    border-color: #3498db;
  }
`;
