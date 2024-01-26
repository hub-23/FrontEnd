import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { FormError } from '../FormError/FormError';
import * as S from './Message.styled';
import { IconSvg } from '../../../common/IconSvg';
import { UploadNotice } from '../UploadNotice/UploadNotice';
import { ImagesList } from '../ImagesList/ImagesList';
import { InputWrapper } from '../QuestionForm.styled';

export const Message = ( { errMessage, allowedFileFormats } ) => {
  const [ textareaValue, setTextareaValue ] = useState( '' );
  const [ textareaHeight, setTextareaHeight ] = useState( 0 );
  const [ isUploadNoticeShown, setIsUploadNoticeShown ] = useState( false );
  const [ images, setImages ] = useState( [] );
  const [ imagesLength, setImagesLength ] = useState( 0 );


  const handleUploadNoticeShown = () => {
    setIsUploadNoticeShown( !isUploadNoticeShown );
  };

  const handleImageSelect = ( value ) => {
    // formik.setFieldValue( 'file', value );
    setImages( value );
  };

  const debouncedSetHeight = _.debounce( ( newHeight ) => {
    setTextareaHeight( newHeight );
  }, 300 );

  const handleTextAreaInput = ( { target } ) => {
    setTextareaValue( target.value );

    if ( textareaHeight !== target.scrollHeight ) {
      debouncedSetHeight( target.scrollHeight );
    }
  };

  useEffect( () => {
    const calculateLines = ( numImages ) => Math.ceil( numImages / 4 );

    if ( images.length > imagesLength ) { // додаємо зображення
      if ( calculateLines( images.length ) > calculateLines( imagesLength ) ) { // збільшення к-ті рядків
        setTextareaHeight( ( prev ) => prev + 48 + 30 ); // image height + vertical margins
      }
      setImagesLength( images.length );
    } else if ( images.length < imagesLength ) { // видаляємо зображення
      if ( calculateLines( images.length ) < calculateLines( imagesLength ) ) {
        setTextareaHeight( ( prev ) => prev - 48 - 30 );
      }
      setImagesLength( images.length );
    }
  }, [ images ] );

  return (
    <S.TextareaWrapper>
      <InputWrapper>
        <S.Textarea
          name="message"
          component="textarea"
          rows="10"
          placeholder="Повідомлення"
          $error={ errMessage }
          value={ textareaValue }
          onChange={ handleTextAreaInput }
          style={ { minHeight: `${ textareaHeight }px` } }
        />
        <FormError name="message" isMarginLeft={ true } />
      </InputWrapper>

      <S.ClipBtn
        type='button'
        aria-label='paper-clip'
        onClick={ handleUploadNoticeShown }
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
      {isUploadNoticeShown
        && <UploadNotice
          allowedFileFormats={ allowedFileFormats }
          handleImageSelect={ handleImageSelect }
          // formik={ formik }
        />
      }
      { images && (
        <ImagesList
          images={ images }
          handleImagesSaving={ setImages }
        />
      )}
    </S.TextareaWrapper>
  );
};
