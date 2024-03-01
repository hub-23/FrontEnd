import React from 'react';
import { IconSvg } from 'components/common/IconSvg';
import * as S from './ImageWithDeleteBtn.styled';

export const ImageWithDeleteBtn = ( { image, onImageDelete, ...props } ) => {
    return (
        <>
          <S.Image
            src={ image }
            alt="uploaded file"
            { ...props }
          />
          <S.ImgDeleteBtn
            type='button'
            aria-label='delete'
            onClick={ () => onImageDelete( image ) }
            { ...props }
          >
            <IconSvg
              xlWidth="16px"
              xlHeight="16px"
              icon="icon-image-delete"
              { ...props }
            />
          </S.ImgDeleteBtn>
        </>
    );
};

// Якщо це буде список зображень, то в батьківський компонент додати такий функціонал:
// const [ images, setImages ] = useState( storedImages );

// const handleImageDelete = ( value ) => {
//   if ( images.includes( value ) ) {
//     const idxToDelete = images.indexOf( value );
//     const updatedImages = [ ...images ];
//     updatedImages.splice( idxToDelete, 1 );
//     setImages( [ ...updatedImages ] );
//   }
// };
