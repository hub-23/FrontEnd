import React, { useState } from 'react';
import * as S from './PhotoHandler.styled';
import { BtnClose } from '../../modalElements/BtnClose';
import { Button } from '../../common/button/Button';
import { FileUploadInput } from '../../modalElements/FileUploadInput';


export const PhotoHandler = ( { onPhotoHandlerClose } ) => {
    const [ avatar, setAvatar ] = useState( '' );

    const handleImageSelect = ( value ) => {
        console.log( value );
        if ( avatar !== value ) {
          setAvatar( value );
        } else {
          alert( 'Поточне зображення вже додано.' );
        }
      };

    return (
        <S.Container>
            <BtnClose
                onActiveModal={ onPhotoHandlerClose }
            />
            <S.Title>Додати фото профілю</S.Title>
            <S.ImageWrapper>
                <img src={ avatar } alt="Обране фото" />
            </S.ImageWrapper>

            <S.AddButton htmlFor="file-input">
              <Button variant='blueGradientedBorder'>Додати</Button>  
              <FileUploadInput onImageSelect={ handleImageSelect } id="file-input" />
            </S.AddButton>

        </S.Container>
    );
};
