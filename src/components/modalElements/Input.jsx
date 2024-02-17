// Для використання в формах створених в Formik

import React from 'react';
import { IconSvg } from '../common/IconSvg';
import { FormError } from './FormError';
import { SaveToLocalStorage } from '../../helpers/SaveToLocalStorage';
import { grayText } from '../../utils/variables.styled';
import * as S from './Input.styled';


export const Input = ( { type, name, placeholder, error, value, isStar, children, ...props } ) => {

    return (
        <S.InputContainer>
            <S.InputWrapper>
                <S.Input
                    type={ type }
                    name={ name }
                    placeholder={ placeholder }
                    $error={ error }
                    $value={ value }
                    id={ name }
                    { ...props }
                />
                <S.Label htmlFor={ name } { ...props }>
                    { placeholder }
                    { isStar && (
                        <S.IconWrapper { ...props }>
                            <IconSvg
                                xlWidth="10px"
                                xlHeight="10px"
                                $fill={ grayText }
                                icon="icon-star-marker"
                                { ...props }
                            />
                        </S.IconWrapper>
                    ) }  
                </S.Label>       
            </S.InputWrapper>
            {/* children - наприклад, для dropdown btn */}
            { children }
            <SaveToLocalStorage fieldName={ name } />
            <FormError name={ name } />  
        </S.InputContainer>
    );
};
