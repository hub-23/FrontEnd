import React, { useEffect, useState } from 'react';
import { Modal } from '../../../common/modalElements/Modal';
import { Input } from '../../../common/modalElements/Input';
import { useAuth } from 'hooks/useAuth';
import sprite from '../../../../assets/sprite.svg';
import * as S from './GeneralInfo.styled';
import { Avatar } from '../../../../components/common/avatar/Avatar';
// import { PhotoHandler } from 'components/StudentPage/modals/PhotoHandler';
import { IconSvg } from 'components/common/IconSvg';
import { Rating } from './Rating';
import { Button } from 'components/common/button/Button';
import defaultBanner from '../../../../assets/banner_hub23.png';
import { PhotoHandler } from 'components/TeacherProfilePage/modals/PhotoHandler';

export const GeneralInfo = ( { errSurname, errName, values } ) => {
  const [ modalOpen, setModalOpen ] = useState( false );
  const [ avatar, setAvatar ] = useState( '' );
  const [ banner, setBanner ] = useState( '' );
  const [ isActive, setIsActive ] = useState( false );
  const { user } = useAuth();

  const rating = 4; // fake rating
  const views = 222; // fake views

  useEffect( () => {
    const storedAvatar = localStorage.getItem( 'student-avatar' ) || user?.avatar;
    const storedBanner = localStorage.getItem( 'student-banner' || defaultBanner );
    if ( storedAvatar ) {
      setAvatar( storedAvatar );
    }

    if ( storedBanner ) {
      setBanner( storedBanner );
    }
  }, [ user ] );

  const handleAvatarReceive = newAvatar => {
    setAvatar( newAvatar );
    localStorage.setItem( 'student-avatar', newAvatar );
  };

  const handleBannerReceive  = newBanner => {
    setBanner( newBanner );
    localStorage.setItem( 'student-banner', newBanner );
  }

  const toggleStatus = () => {
    setIsActive( prevStatus => !prevStatus );
  };

  return (
    <S.Container>
      <S.ProfilePhoto avatar={ avatar }>
        <div className="circle">
          {!avatar && <Avatar />}

          {avatar && <img src={ avatar } alt="Обрізане фото" />}

          <button
            type="button"
            aria-label="add image"
            onClick={ () => setModalOpen( { type: 'avatar' } ) }
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
            <span>Розмір файлу не менше 300px × 300px.</span>
            <span>Формат JPG чи PNG.</span>
          </p>
          <S.InfoWrapper isActive={ isActive }>
            <Rating rating={ rating } />
            <p>
              {isActive ? 'активний' : 'неактивний'}
            </p>
            <div>
              <IconSvg
                xlWidth="16px"
                xlHeight="16px"
                icon="icon-eye-view"
              />
              <p>{views}</p>
            </div>
          </S.InfoWrapper>
        </div>
      </S.ProfilePhoto>
      <S.ButtonWrapper>
        <Button
          onClick={ toggleStatus }
          isActive={ isActive }
        >
          Деактивувати профіль
        </Button>
        <Button
          onClick={ toggleStatus }
          isActive={ !isActive }
        >
          Активувати профіль
        </Button>
      </S.ButtonWrapper>
      <S.BannerWrapper>
        {avatar ? (
          <img src={ avatar } alt="Обрізане фото" />
        ) : (
          <img src={ defaultBanner } />
        )}

        <button
          type="button"
          aria-label="add banner"
          onClick={ () => setModalOpen( { type: 'banner' } ) }
        >
          <svg width="16px" height="16px" className="default">
            <use href={ `${sprite}#icon-add-avatar` }></use>
          </svg>
          <svg width="16px" height="16px" className="active">
            <use href={ `${sprite}#icon-add-avatar-hover` }></use>
          </svg>
        </button>
      </S.BannerWrapper>

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
            // onAvatarReceive={ handleAvatarReceive }
            // backendAvatar={ avatar }

            onPhotoRecive={ modalOpen.type === 'avatar' ? handleAvatarReceive : handleBannerReceive }
            backendPhoto={ modalOpen.type === 'avatar' ? avatar : banner }
            photoType={ modalOpen.type }
            defaultBanner={ defaultBanner }
          />
        </Modal>
      )}
    </S.Container>
  );
};
