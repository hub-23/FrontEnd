import React, { useState, useEffect } from 'react';
import { convertToPixelCrop } from 'react-image-crop';
// import axios from 'axios';
// import { useAuth } from '../../../hooks/useAuth';
import * as S from './PhotoHandler.styled';
import { BtnClose } from '../../common/modalElements/BtnClose';
import { Button } from '../../common/button/Button';
import { FileUploadInput } from '../../common/modalElements/FileUploadInput';
import { Crop } from '../../common/modalElements/Crop';
import { Abbreviation } from '../../common/Abbreviation';
import { setCanvasPreview } from '../../../helpers/setCanvasPreview';
// eslint-disable-next-line no-unused-vars
import defaultPhoto from '../../../assets/home/students-photos/image 3.png';


export const PhotoHandler = ( { onPhotoHandlerClose, onAvatarReceive } ) => {
  const [ avatar, setAvatar ] = useState( '' );
  const [ dataToCrop, setDataToCrop ] = useState( {} );
  const [ croppedAvatar, setCroppedAvatar ] = useState( '' );
  const [ croppedBlobAvatar, setCroppedBlobAvatar ] = useState( '' );
  const { imgRef, previewCanvasRef, crop } = dataToCrop;
  // const { token } = useAuth();
  // const backendAvatar = defaultPhoto;
  const backendAvatar = '';

  const handleImageSelect = value => {
    if ( avatar !== value ) {
      setAvatar( value );
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
    setCroppedAvatar( dataUrl );

    previewCanvasRef.current.toBlob(
      blob => {
        // console.log( 'blob:', blob );
        setCroppedBlobAvatar( blob );
      },
      'image/jpeg',
      0.8
    );
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
    // console.log( 'croppedAvatar:', croppedAvatar );
    console.log( 'croppedBlobAvatar:', croppedBlobAvatar );

    onPhotoHandlerClose();
    // try {
    //   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    //   const { data } = await instance.post( '/customers/update_avatar', avatar );
    //   console.log( data );
    // } catch ( error ) {
    //   console.log( error.message );
    // }
  };

  const handlePhotoDelete = () => {
    // Delete-запит на бек
    onPhotoHandlerClose();
  };

  return (
    <S.Container>
      <BtnClose onActiveModal={ onPhotoHandlerClose } />
      <S.Title> 
        {!backendAvatar
          ? 'Додати зображення профілю'
          : 'Змінити зображення профілю'
        }
      </S.Title>
      
      {croppedAvatar ? (
          <S.CircleWrapper>
            <img src={ croppedAvatar } alt="Обрізане фото" />
          </S.CircleWrapper>             
      ) : avatar ? ( // необрізане фото
          <S.ImageWrapper>
            <Crop
              image={ avatar }
              configuration={ {
                targetWidth: 400, // ширина і висота кропу (тут - на максимальний розмір зображення)
                targetHeight: 400,
                circularCrop: true,
                aspect: 1, // targetWidth / targetHeight,
              } }
              onDataToCrop={ setDataToCrop }
            />
          </S.ImageWrapper>
      ) : ( // 1ше відкриття модалки
            <S.CircleWrapper>
              { backendAvatar
                ? <img src={ backendAvatar } alt="Фото користувача" />
                : <Abbreviation $fontSize='48px' $fontWeight='600' $lineHeight='1.3' />
              }
            </S.CircleWrapper>    
      ) }
      
      { avatar ? (
          <S.BtnsWrapper>
            <S.SaveButton
              variant="blueGradientedBorder"
              onClick={ () => croppedAvatar
                ? handleSubmit()
                : handleImageCrop() 
              }
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
                {!backendAvatar
                  ? 'Завантажити фото'
                  : 'Завантажити нове'
                }
              </Button>
              <FileUploadInput
                onImageSelect={ handleImageSelect }
                id="file-input"
              />
            </S.AddButton>
            {!backendAvatar ? (
              <S.CancelBtn onClick={ onPhotoHandlerClose }>
                Скасувати
              </S.CancelBtn>  
            ) : (
              <S.DeleteBtn onClick={ handlePhotoDelete }>
                Видалити фото
              </S.DeleteBtn>  
            )}            
          </S.BtnsWrapper>        
      ) }
    </S.Container>
  );
};
