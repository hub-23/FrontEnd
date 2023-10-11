import React, { useRef, useState, useCallback } from 'react';

import { Button } from '../common/button/Button';
import { Segment } from './components/segment/Segment';
import { GoogleLoginButton } from './components/googleLoginButton/GoogleLoginButton';
import { RegistrationForm } from './registrationForm/RegistrationForm';

import cross from '../../assets/registration-form/cross.png';

import * as S from './AuthModal.styled.js';

export const AuthModal = ( { onClose } ) => {
  const [ isRegistration, setIsRegistration ] = useState( true );
  const outline = useRef( null );

  const handleOutsideClick = useCallback( ( e ) => {
    e.stopPropagation();
    if ( e.target.classList.contains( 'overlay' ) ) {
      onClose();
    } else {
      return;
    }
  }, [ onClose ] );

  return (
    <S.Overlay className='overlay' raf={ outline } onClick={ handleOutsideClick }>
      <S.Modal className="form-content">
        <S.Flex align='start' gap='100px'>
          <Segment maxwidth='705px'>
            <S.Flex>
              <Button
                variant='primary'
                onClick={ ()=>setIsRegistration( false ) }>
                Вхід
              </Button>
              <Button
                variant='secondary'
                onClick={ ()=>setIsRegistration( true ) }
              >
                Реєстрація
              </Button>
            </S.Flex>
            {isRegistration
            ? <RegistrationForm onClose={ onClose }/>
            : <h2>LoginForm</h2>
            }
          </Segment>
          <Segment>
            <Button
              variant='transparent'
              size='small'
              alginSelf='end'
              onClick={ onClose }>
              <img src={ cross } alt="cross" />
            </Button>
            < S.GoogleRegistration>
              <S.Typography size='20px'>
                або
                <span>
                  Увійти за допомогою
                </span>
              </S.Typography>
              <GoogleLoginButton />
            </S.GoogleRegistration>
          </Segment>
        </S.Flex>
      </S.Modal>
    </S.Overlay >
  );
};
