import React, { useState, useEffect } from 'react';
import { FormError } from '../FormError/FormError';
import { IconSvg } from '../../../common/IconSvg';
import { UploadPopup } from '../UploadPopup/UploadPopup';
import { ImagesList } from '../ImagesList/ImagesList';
import { SaveToLocalStorage } from '../SaveToLocalStorage';
import { InputLableBox, IconContainer } from '../QuestionForm.styled';
import { grayText } from '../../../../utils/variables.styled';
import * as S from './Message.styled';


export const Message = ( { handleAttachmentsSelect, errMessage, values } ) => {
  const [ uploadPopupVisible, setUploadPopupVisible ] = useState( false );
  const storedImages = JSON.parse( localStorage.getItem( 'question-form-attachments' ) ) || [];
  const [ images, setImages ] = useState( storedImages );


  const handleImageSelect = ( value ) => {
    if ( !images.includes( value ) ) {
      setImages( ( prev ) => [ ...prev, value ] );
    } else {
      alert( 'Поточне зображення вже додано.' );
    }
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
    handleAttachmentsSelect( images );
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
        <InputLableBox>
          <S.Textarea
            name="message"
            component="textarea"
            placeholder="Повідомлення"
            $error={ errMessage }
            id="message"
          />
          <S.Label htmlFor="message">
            Повідомлення
            <IconContainer >
              <IconSvg
                xlWidth="10px"
                xlHeight="10px"
                $fill={ grayText }
                icon="icon-star-marker"
              />
            </IconContainer>
          </S.Label>
        </InputLableBox>
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
