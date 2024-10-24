// Для використання в формах створених в Formik

import React, { useState } from 'react';
import { IconSvg } from '../IconSvg';
import { FormError } from './FormError';
import { DropdownList } from './DropdownList';
import { BtnEye } from '../BtnEye';
import { SaveToLocalStorage } from '../../../helpers/SaveToLocalStorage';
import { grayText } from '../../../utils/variables.styled';
import * as S from './Input.styled';
import { IconBtn } from '../IconBtn';

export const Input = ( {
  type,
  name,
  placeholder,
  error,
  value,
  isStar,
  dropdown,
  data,
  formik,
  btnEye,
  component,
  customIcon,
  ...props
} ) => {
  const [ isDropdownShown, setIsDropdownShown ] = useState( false );
  const [ showPassword, setSowPassword ] = useState( true );

  const handleTopicSelect = ( formik, value ) => {
    formik.setFieldValue( name, value );
    setIsDropdownShown( !isDropdownShown );
  };

  return (
    <S.InputContainer>
      <S.InputWrapper>
        <S.Input
          type={ !btnEye ? type : showPassword ? 'password' : 'text' }
          name={ name }
          placeholder={ placeholder }
          onClick={ () => setIsDropdownShown( !isDropdownShown ) }
          $error={ error }
          $value={ value }
          id={ name }
          $dropdown={ dropdown }
          { ...props }
        />
        <S.Label htmlFor={ name } { ...props }>
          {placeholder}
          {isStar && (
            <S.IconWrapper { ...props }>
              <IconSvg
                xlWidth="10px"
                xlHeight="10px"
                $fill={ grayText }
                icon="icon-star-marker"
                { ...props }
              />
            </S.IconWrapper>
          )}
        </S.Label>
      </S.InputWrapper>

      {dropdown && (
        <>
          <S.DropdownBtn
            type="button"
            aria-label="dropdown-menu"
            onClick={ () => setIsDropdownShown( !isDropdownShown ) }
            $rotate={ isDropdownShown }
          >
            <div>
              <IconSvg width="11px" height="11px" icon="icon-arrow-down" />
            </div>
          </S.DropdownBtn>

          {isDropdownShown && (
            <DropdownList
              data={ data }
              handleTopicSelect={ ( formik, value ) =>
                handleTopicSelect( formik, value )
              }
              formik={ formik }
            />
          )}
        </>
      )}
      {btnEye && (
        <BtnEye
          xlRight="36px"
          xlTop="16px"
          smRight="20px"
          smTop="13px"
          click={ () => setSowPassword( !showPassword ) }
        >
          {showPassword ? (
            <IconSvg
              xlWidth="24px"
              xlHeight="24px"
              smWidth="20px"
              smHeight="20px"
              icon="icon-eye-slash"
            />
          ) : (
            <IconSvg
              xlWidth="24px"
              xlHeight="24px"
              smWidth="20px"
              smHeight="20px"
              icon="icon-eye"
            />
          )}
        </BtnEye>
      )}
        { customIcon && !isStar && (
        <IconBtn
            xlRight="36px"
            xlTop="18px"
            smRight="20px"
            smTop="13px"
            click={ () => setSowPassword( !showPassword ) }>
              <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                // $fill={ grayText }
                icon={ customIcon }
                { ...props }
              />
            </IconBtn>
          )}
      {name !== 'password' && (
        <SaveToLocalStorage component={ component } fieldName={ name } />
      )}
      <FormError name={ name } { ...props } />
    </S.InputContainer>
  );
};
