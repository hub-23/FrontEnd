import React from 'react';
import * as S from './input.style.js';
import star from '../../../assets/registration-form/star.png';
const Input = ({
  name,
  type,
  errors,
  disabled,
  placeholder,
}) => {
  return (
    <S.Flex >
      <S.StyledInput
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
      />

      <S.Errors className='errorWrapper'>
        {errors
          && (
            <>
              <img src={star} alt="star" />
              <span>{errors}</span>
            </>
          )
        }
      </S.Errors>
    </S.Flex >

  );
};

export default Input;
