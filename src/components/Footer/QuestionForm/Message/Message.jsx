import React, { useState, useEffect } from 'react';
import { FormError } from '../FormError/FormError';
import { IconSvg } from '../../../common/IconSvg';
import { UploadPopup } from '../UploadPopup/UploadPopup';
import { ImagesList } from '../ImagesList/ImagesList';
import { SaveToLocalStorage } from '../SaveToLocalStorage';
import * as S from './Message.styled';


export const Message = ( { errMessage, values } ) => {
  const [ uploadPopupVisible, setUploadPopupVisible ] = useState( false );
  const storedImages = JSON.parse( localStorage.getItem( 'question-form-attachments' ) ) || [];
  const [ images, setImages ] = useState( storedImages );


  const handleImageSelect = ( value ) => {
    setImages( ( prev ) => [ ...prev, value ] );
  };

  const handleImageDelete = ( value ) => {
    if ( images.includes( value ) ) {
      const idxToDelete = images.indexOf( value );
      const updatedImages = [ ...images ];
      updatedImages.splice( idxToDelete, 1 );
      setImages( [ ...updatedImages ] );
    }
  };

  useEffect( () => {
    localStorage.setItem( 'question-form-attachments', JSON.stringify( images ) );
  }, [ images ] );

  useEffect( () => {
    const handleClickOutside = ( { target } ) => {
      const tag = target.tagName;
      if ( tag === 'TEXTAREA' || tag === 'DIV' || tag === 'FORM' || tag === 'UL' || tag === 'IMG' ) {
        setUploadPopupVisible( false );
      }
    };
    window.addEventListener( 'click', handleClickOutside );

    return () => {
      window.removeEventListener( 'click', handleClickOutside );
    };
  }, [ uploadPopupVisible ] );

  return (
    <div>
      <S.InputWrapper $error={ errMessage } $value={ values.message } >
        <S.Textarea
          name="message"
          component="textarea"
          placeholder="Повідомлення"
          $error={ errMessage }
        />
        { images?.length > 0 && (
          <ImagesList
            images={ images }
            handleImageDelete={ handleImageDelete }
            errMessage={ errMessage }
          />
        )}
        <S.ClipBtn
          type='button'
          aria-label='paper-clip'
          onClick={ () => setUploadPopupVisible( !uploadPopupVisible ) }
        >
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            mdWidth="24px"
            mdHeight="24px"
            smWidth="24px"
            smHeight="24px"
            icon="icon-paper-clip"
          />
        </S.ClipBtn>
        {uploadPopupVisible && (
          <UploadPopup handleImageSelect={ handleImageSelect } />
        ) }
      </S.InputWrapper>
      <SaveToLocalStorage fieldName="message" />
      <FormError name="message" isMarginLeft={ true } />
    </div>
  );
};
