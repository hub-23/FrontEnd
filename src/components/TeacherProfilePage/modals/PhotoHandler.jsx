import React, { useState, useEffect } from 'react';
import { convertToPixelCrop } from 'react-image-crop';
import axios from 'axios';
import { useAuth } from '../../../hooks/useAuth';
import * as S from './PhotoHandler.styled';
import { BtnClose } from '../../common/modalElements/BtnClose';
import { Button } from '../../common/button/Button';
import { FileUploadInput } from '../../common/modalElements/FileUploadInput';
import { Crop } from '../../common/modalElements/Crop';
import { Abbreviation } from '../../common/Abbreviation';
import { setCanvasPreview } from '../../../helpers/setCanvasPreview';
// eslint-disable-next-line no-unused-vars
// import defaultPhoto from '../../../assets/home/students-photos/image 3.png';

export const PhotoHandler = ( {
  onPhotoHandlerClose,
  onPhotoReceive,
  backendPhoto,
  photoType,
  type,
  defaultBanner,
} ) => {
  const [ photo, setPhoto ] = useState( '' );
  const [ dataToCrop, setDataToCrop ] = useState( {} );
  const [ croppedPhoto, setCroppedPhoto ] = useState( '' );
  const [ croppedBlobPhoto, setCroppedBlobPhoto ] = useState( '' );
  const { imgRef, previewCanvasRef, crop } = dataToCrop;
  const { token } = useAuth();

  const handleImageSelect = value => {
    if ( photo !== value ) {
      setPhoto( value );
    } else {
      alert( 'Поточне зображення вже додано.' );
    }
  };

  const handleImageCrop = () => {
    setCanvasPreview(
      imgRef.current,
      previewCanvasRef.current,
      convertToPixelCrop( crop, imgRef.current.width, imgRef.current.height )
    );

    const dataUrl = previewCanvasRef.current.toDataURL(); // довгий рядок
    setCroppedPhoto( dataUrl );

    previewCanvasRef.current.toBlob(
      blob => {
        setCroppedBlobPhoto( blob );
      },
      'image/jpeg',
      0.8
    );
  };

  useEffect( () => {
    if ( croppedPhoto ) {
      onPhotoReceive( croppedPhoto );
    }
  }, [ croppedPhoto ] );

  const instance = axios.create( {
    baseURL: 'https://hub23-84u3.onrender.com',
  } );

  const handleSubmit = async () => {
    onPhotoHandlerClose();
    try {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;

      const formData = new FormData();
      formData.append( 'file', croppedBlobPhoto, 'photo.jpg' ); // Додаємо blob в FormData

      const { data } = await instance.post(
        '/customers/update_photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log( data );
    } catch ( error ) {
      console.log( error.message );
    }
  };

  const handlePhotoDelete = async () => {
    try {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const { data } = await instance.post( '/customers/set_null_photo' );
      console.log( data );
      onPhotoReceive( '' ); // Очищаємо аватар після видалення
    } catch ( error ) {
      console.log( error.message );
    }
    onPhotoHandlerClose();
  };

  const isAvatar = photoType === 'avatar';

  return (
    <S.Container>
      <BtnClose onActiveModal={ onPhotoHandlerClose } />
      <S.Title>
        {!backendPhoto
          ? `Додати зображення ${ isAvatar ? 'профілю' : 'банера' }`
          : `Зміна зображення ${ isAvatar ? 'профілю' : 'банера' }`
        }
      </S.Title>

      {croppedPhoto ? (
        <S.CircleWrapper>
          <img src={ croppedPhoto } alt="Обрізане фото" />
        </S.CircleWrapper>
      ) : photo ? ( // необрізане фото
        <S.ImageWrapper isAvatar={ isAvatar }>
          <Crop
            image={ photo }
            configuration={ {
              targetWidth: isAvatar ? 400 : 580,
              // ширина і висота кропу (тут - на максимальний розмір зображення)
              targetHeight: isAvatar ? 400 : 145,
              circularCrop: isAvatar,
              aspect: isAvatar ? 1: 4,  // targetWidth / targetHeight,
            } }
            onDataToCrop={ setDataToCrop }
          />
        </S.ImageWrapper>
      ) : (
        // 1ше відкриття модалки
        <S.CircleWrapper isAvatar={ isAvatar }>
          {backendPhoto || !isAvatar ? (
            <img src={ backendPhoto || defaultBanner } alt="Фото користувача" />
          ) : (
            <Abbreviation
              $fontSize="48px"
              $fontWeight="600"
              $lineHeight="1.3"
            />
          )}
        </S.CircleWrapper>
      )
      }

      {photo ? (
        <S.BtnsWrapper>
          <S.SaveButton
            variant="blueGradientedBorder"
            onClick={ () => ( croppedPhoto ? handleSubmit() : handleImageCrop() ) }
          >
            Зберегти зміни
          </S.SaveButton>
          <S.CancelBtn onClick={ onPhotoHandlerClose }>
            Відхилити зміни
          </S.CancelBtn>
        </S.BtnsWrapper>
      ) : (
        <S.BtnsWrapper>
          <S.AddButton htmlFor="file-input">
            <Button variant="blue">
              {!backendPhoto ? 'Завантажити фото' : 'Завантажити нове'}
            </Button>
            <FileUploadInput
              onImageSelect={ handleImageSelect }
              id="file-input"
            />
          </S.AddButton>
          {!backendPhoto ? (
            <S.CancelBtn onClick={ onPhotoHandlerClose }>Скасувати</S.CancelBtn>
          ) : (
            <S.DeleteBtn onClick={ handlePhotoDelete }>Видалити фото</S.DeleteBtn>
          )}
        </S.BtnsWrapper>
      )}
    </S.Container>
  );
};
