import React, { useState, useEffect } from 'react';
import * as S from './PhotoHandler.styled';
import { BtnClose } from '../../common/modalElements/BtnClose';
import { Button } from '../../common/button/Button';
import { FileUploadInput } from '../../common/modalElements/FileUploadInput';
import { Crop } from '../../common/modalElements/Crop';

export const PhotoHandler = ( { onPhotoHandlerClose, onAvatarReceive } ) => {
  const [ avatar, setAvatar ] = useState( '' );
  const [ cropBtnClick, setCropBtnClick ] = useState( false );
  const [ croppedAvatar, setCroppedAvatar ] = useState( '' );

  const handleImageSelect = value => {
    if ( avatar !== value ) {
      setAvatar( value );
    } else {
      alert( 'Поточне зображення вже додано.' );
    }
  };

  useEffect( () => {
    if ( croppedAvatar ) {
      onAvatarReceive( croppedAvatar );
    }
  }, [ croppedAvatar ] );

  return (
    <S.Container>
      <BtnClose onActiveModal={ onPhotoHandlerClose } />
      <S.Title>Додати фото профілю</S.Title>
      {croppedAvatar ? (
        <>
          <S.CircleWrapper>
            <img src={ croppedAvatar } alt="Обрізане фото" />
          </S.CircleWrapper>
          <Button
            variant="blueGradientedBorder"
            onActiveModal={ onPhotoHandlerClose }
          >
            Зберегти
          </Button>
        </>
      ) : avatar ? (
        <>
          <S.ImageWrapper>
            <Crop
              image={ avatar }
              clickCrop={ cropBtnClick }
              onCroppedAvatar={ setCroppedAvatar }
            />
          </S.ImageWrapper>
          <Button
            variant="blueGradientedBorder"
            onClick={ () => setCropBtnClick( true ) }
          >
            Обрізати
          </Button>
        </>
      ) : (
        <>
          <S.CircleWrapper></S.CircleWrapper>
          <S.AddButton htmlFor="file-input">
            <Button variant="blueGradientedBorder">Додати</Button>
            <FileUploadInput
              onImageSelect={ handleImageSelect }
              id="file-input"
            />
          </S.AddButton>
        </>
      )}
    </S.Container>
  );
};
