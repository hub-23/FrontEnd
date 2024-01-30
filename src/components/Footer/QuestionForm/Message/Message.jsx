import React, { useState, useEffect } from 'react';
import { FormError } from '../FormError/FormError';
import { IconSvg } from '../../../common/IconSvg';
import { UploadPopup } from '../UploadPopup/UploadPopup';
import { ImagesList } from '../ImagesList/ImagesList';
import * as S from './Message.styled';


export const Message = ( { errMessage, allowedFileFormats, values, handleAttachmenValue, formik } ) => {
  const [ uploadPopupVisible, setUploadPopupVisible ] = useState( false );
  let storedImages = [];
  try {
    storedImages = JSON.parse( localStorage.getItem( 'question-form-images' ) ) || [];
  } catch ( error ) {
    console.log( error.message );
  }
  const [ images, setImages ] = useState( storedImages );


  const handleImageSelect = ( value ) => {
    setImages( value );
  };

  useEffect( () => {
    handleAttachmenValue( formik, images );
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
            handleImagesSaving={ setImages }
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
          <UploadPopup
            className="upload-notice-component"
            allowedFileFormats={ allowedFileFormats }
            handleImageSelect={ handleImageSelect }
          />
        ) }
      </S.InputWrapper>
      <FormError name="message" isMarginLeft={ true } />
    </div>
  );
};
