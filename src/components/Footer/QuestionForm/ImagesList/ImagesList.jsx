import React from 'react';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './ImagesList.styled';


export const ImagesList = ( { images, handleImagesSaving } ) => {
  const handleImageDelete = ( image ) => {
    if ( images.includes( image ) ) {
      const idxToDelete = images.indexOf( image );
      images.splice( idxToDelete, 1 );
      handleImagesSaving( [ ...images ] );
    }
  };

  return (
    <S.ImagesList>
      {images.map( ( image ) => (
        <li key={ image } style={ { position: 'relative' } }>
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
        </li>
      ) )}
    </S.ImagesList>
  );
};
