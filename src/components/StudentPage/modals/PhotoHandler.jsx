import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../hooks/useAuth';
import * as S from './PhotoHandler.styled';
import { BtnClose } from '../../common/modalElements/BtnClose';
import { Button } from '../../common/button/Button';
import { FileUploadInput } from '../../common/modalElements/FileUploadInput';
import { Crop } from '../../common/modalElements/Crop';

export const PhotoHandler = ( { onPhotoHandlerClose, onAvatarReceive } ) => {
  const [ avatar, setAvatar ] = useState( '' );
  const [ cropBtnClick, setCropBtnClick ] = useState( false );
  const [ croppedAvatar, setCroppedAvatar ] = useState( '' );
  // const { token } = useAuth();

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

  // const instance = axios.create( {
  //   baseURL: 'https://hub23-84u3.onrender.com',
  // } );

  const handleSubmit = async () => {
    console.log( croppedAvatar );
    // try {
    //   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    //   const { data } = await instance.post( '/customers/update_avatar', 'croppedAvatar' );
    //   console.log( data );
    // } catch ( error ) {
    //   console.log( error.message );
    // }
  };

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
            onClick={ handleSubmit }
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
