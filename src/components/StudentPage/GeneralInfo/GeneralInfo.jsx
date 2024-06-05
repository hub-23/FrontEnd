import React, { useEffect, useState } from 'react';
import { Modal } from '../../common/modalElements/Modal';
import { PhotoHandler } from '../modals/PhotoHandler';
import { Input } from '../../common/modalElements/Input';
import { useAuth } from 'hooks/useAuth';
import { Abbreviation } from '../../common/Abbreviation';
import sprite from '../../../assets/sprite.svg';
import * as S from './GeneralInfo.styled';

export const GeneralInfo = ( { errSurname, errName, values } ) => {
  const [ modalOpen, setModalOpen ] = useState( false );
  const [ avatar, setAvatar ] = useState( '' );
  const { user } = useAuth();

  useEffect( () => {
    const storedAvatar = localStorage.getItem( 'student-avatar' ) || user?.avatar;
    if ( storedAvatar ) {
      setAvatar( storedAvatar );
    }
  }, [ user ] );

  const handleAvatarReceive = newAvatar => {
    setAvatar( newAvatar );
    localStorage.setItem( 'student-avatar', newAvatar );
  };

  return (
    <S.Container>
      <S.ProfilePhoto>
        <div className="circle">
          {!avatar && (
            <Abbreviation
              $fontSize="24px"
              $fontWeight="500"
              $lineHeight="1.4"
            />
          )}
          {avatar && <img src={ avatar } alt="Обрізане фото" />}

          <button
            type="button"
            aria-label="add image"
            onClick={ () => setModalOpen( true ) }
          >
            <svg width="16px" height="16px" className="default">
              <use href={ `${sprite}#icon-add-avatar` }></use>
            </svg>
            <svg width="16px" height="16px" className="active">
              <use href={ `${sprite}#icon-add-avatar-hover` }></use>
            </svg>
          </button>
        </div>
        <div className="text">
          <p>Завантажте зображення профілю</p>
          <p>
            Розмір файлу не менше 300px × 300px.
            <br />
{' '}
Формат JPG чи PNG.
</p>
        </div>
      </S.ProfilePhoto>
      <Input
        type="text"
        name="surname"
        error={ errSurname }
        value={ values.surname }
        component="student" // for SaveToLocalStorage (частина назви ключа)
      />
      <Input
        type="text"
        name="name"
        error={ errName }
        value={ values.name }
        component="student"
      />

      {modalOpen && (
        <Modal onActiveModal={ () => setModalOpen( false ) }>
          <PhotoHandler
            onPhotoHandlerClose={ () => setModalOpen( false ) }
            onAvatarReceive={ handleAvatarReceive }
            backendAvatar={ avatar }
          />
        </Modal>
      )}
    </S.Container>
  );
};
