/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../common/button/Button';
import { Input } from '../components/input/Input';

import { useAppForm } from '../hooks/hooks.js';

import { DEFAULT_LOGIN_PAYLOAD } from '../common/constants/constants.js';
// eslint-disable-next-line max-len
import { login as loginValidationSchema } from '../validation-schemas/validation-schemas.js';
import { UserPayloadKey } from '../common/enums/enums.js';

import * as S from '../registrationForm/RegistrationForm.styled.js';
import { UncontrolledCheckbox } from '../components/checkbox/UncontrolledCheckbox';

export const LoginForm = ( { onClose } ) => {
  // const [ isLoading, setIsLoading ] = useState( false );
  const { control, errors, handleSubmit, reset } = useAppForm( {
    defaultValues: DEFAULT_LOGIN_PAYLOAD,
    validationSchema: loginValidationSchema,
  } );

  const handleLogin = ( data ) => {
    console.log( 'data', data );
    reset();
    onClose();
  };

  return (
    <form styles={ { maxWidth: '100%' } }
      autoComplete='off'
      action=''
      name='registrationForm'
      onSubmit=
        { handleSubmit( handleLogin ) }>
      <Input
        type='email'
        name={ UserPayloadKey.EMAIL }
        placeholder='Ваш e-mail'
        control={ control }
        errors={ errors }
      />
      <Input
        type='password'
        name={ UserPayloadKey.PASSWORD }
        placeholder='Придумайте пароль'
        control={ control }
        errors={ errors }
      />
      <S.Flex align="start">
        <UncontrolledCheckbox
          name={ UserPayloadKey.CONFIDENTPOLICY }
          size='md'
        >
        Залишитись в системі
        </UncontrolledCheckbox>
        <S.StyledLink>
          <Link to="/" >
      Forgot password?
          </Link>
        </S.StyledLink>
      </S.Flex>

      <S.Flex>
        <Button
          variant='blue'
          size='large'
          type='submit'>
          Увійти
        </Button>
      </S.Flex>
    </form>
  );
};

