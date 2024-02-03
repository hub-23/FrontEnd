import React from 'react';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './ImagesList.styled';


export const ImagesList = ( { images, handleImageDelete, errMessage } ) => {
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
            aria-label='delete'
            onClick={ () => handleImageDelete( image ) }
          >
            <IconSvg
              xlWidth="16px"
              xlHeight="16px"
              icon="icon-image-delete"
            />
          </S.ImgDeleteBtn>
        </S.ImageItem>
      ) )}
    </S.ImagesList>
  );
};
