import React from 'react';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './ImagesList.styled';


export const ImagesList = ( { images, handleImagesSaving, errMessage } ) => {
  const handleImageDelete = ( image ) => {
    if ( images.includes( image ) ) {
      const idxToDelete = images.indexOf( image );
      images.splice( idxToDelete, 1 );
      handleImagesSaving( [ ...images ] );
      // localStorage.setItem( 'question-form-attachments', JSON.stringify( [ ...images ] ) );
    }
  };

  return (
    <S.ImagesList $error={ errMessage }>
      {images.map( ( image ) => (
        <S.ImageItem key={ image } style={ { position: 'relative' } }>
          <S.Image
            src={ image }
            alt="uploaded file"
          />
          <S.ImgDeleteBtn
            type='button'
            aria-label='image-delete'
            onClick={ () => handleImageDelete( image ) }
          >
            <IconSvg
              xlWidth="16px"
              xlHeight="16px"
              mdWidth="16px"
              mdHeight="16px"
              smWidth="16px"
              smHeight="16px"
              icon="icon-image-delete"
            />
          </S.ImgDeleteBtn>
        </S.ImageItem>
      ) )}
    </S.ImagesList>
  );
};
