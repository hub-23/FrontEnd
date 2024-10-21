import React, { useState, useEffect } from 'react';
import * as S from './PhotoGallery.styled';
import { IconSvg } from 'components/common/IconSvg';
import { UploadPopup } from 'components/Footer/modals/QuestionForm/UploadPopup/UploadPopup';
import { ImageWithDeleteBtn } from 'components/common/modalElements/ImageWithDeleteBtn';
import { AddButton } from '../Expertise/Expertise.styled';
import { grayText } from 'utils/variables.styled';

export const PhotoGallery = () => {
  const [ uploadPopupVisible, setUploadPopupVisible ] = useState( false );

  const fakeImages = [
    'https://picsum.photos/id/1/200/300',
    'https://picsum.photos/id/2/200/300',
    'https://picsum.photos/id/3/200/300',
  ];

  const storedImages
    // = JSON.parse( localStorage.getItem( 'question-form-attachments' ) ) || fakeImages;
    = fakeImages;

  const [ images, setImages ] = useState( storedImages );

  const handleImageSelect = value => {
    if ( !images.includes( value ) ) {
      setImages( prev => [ ...prev, value ] );
    } else {
      alert( 'Поточне зображення вже додано.' );
    }
  };

  const handleImageDelete = value => {
    if ( images.includes( value ) ) {
      const idxToDelete = images.indexOf( value );
      const updatedImages = [ ...images ];
      updatedImages.splice( idxToDelete, 1 );
      setImages( [ ...updatedImages ] );
    }
  };

  useEffect( () => {
    // handleAttachmentsSelect( images );
    localStorage.setItem( 'question-form-attachments', JSON.stringify( images ) );
  }, [ images ] );

  useEffect( () => {
    const handleClickOutside = ( { target } ) => {
      const tag = target.tagName;
      if (
        tag === 'TEXTAREA'
        || tag === 'DIV'
        || tag === 'FORM'
        || tag === 'UL'
        || tag === 'IMG'
      ) {
        setUploadPopupVisible( false );
      }
    };
    window.addEventListener( 'click', handleClickOutside );

    return () => {
      window.removeEventListener( 'click', handleClickOutside );
    };
  }, [ uploadPopupVisible ] );

  return (
    <S.Container>
      <S.InputContainer>
        <AddButton
          type="button"
          aria-label="paper-clip"
          onClick={ () => setUploadPopupVisible( !uploadPopupVisible ) }
        >
          <IconSvg
            xlWidth="22px"
            xlHeight="22px"
            $fill={ grayText }
            $transformRotate="rotate(45deg)"
            icon="icon-cross"
          />
          Додати фото
        </AddButton>
        {uploadPopupVisible && (
          <UploadPopup handleImageSelect={ handleImageSelect } />
        )}

        {images?.length > 0 && (
          <S.ImagesList>
            {images.map( image => (
              <S.ImageItem key={ image }>
                <ImageWithDeleteBtn
                  image={ image }
                  onImageDelete={ handleImageDelete }
                />
              </S.ImageItem>
            ) )}
          </S.ImagesList>
        )}
      </S.InputContainer>
    </S.Container>
  );
};
