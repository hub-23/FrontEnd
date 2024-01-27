import React, { useState, useEffect, useRef } from 'react';
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

  const lineHeightRef = useRef( null );

  const handleUploadNoticeShown = () => {
    setIsUploadNoticeShown( !isUploadNoticeShown );
  };

  const handleImageSelect = ( value ) => {
    // formik.setFieldValue( 'file', value );
    setImages( value );
  };


  const debouncedSetHeight = _.debounce( ( newHeight ) => {
    setTextareaHeight( newHeight );
  }, 200 );


  const handleTextAreaInput = ( { target } ) => {
    setTextareaValue( target.value );

    if ( target.scrollHeight > textareaHeight ) { // додаємо рядки
      lineHeightRef.current = target.scrollHeight - textareaHeight; // 28px
      debouncedSetHeight( target.scrollHeight );
    } else if ( target.scrollHeight < textareaHeight ) {
      debouncedSetHeight( textareaHeight - lineHeightRef.current );
    }
  };

  useEffect( () => {
    const calculateLines = ( numImages ) => Math.ceil( numImages / 4 );
    const imageHeight = 48;
    const imageVerticalPadding = 16;
    const imageBottomGap = 8;
    const topSpaceToShowPlaceholder = 38;

    if ( images.length > imagesLength ) { // додаємо зображення
      if ( calculateLines( images.length ) > calculateLines( imagesLength ) ) { // збільшення к-ті рядків
        images.length === 1 // 1ше зображення
        ? setTextareaHeight( ( prev ) =>
            prev === 0
            ? ( prev + imageHeight + imageVerticalPadding * 2 + topSpaceToShowPlaceholder )
            : ( prev + imageHeight + ( errMessage ? imageVerticalPadding : imageVerticalPadding * 2 ) ) )
        : setTextareaHeight( ( prev ) => prev + imageHeight + imageBottomGap );
      }
      setImagesLength( images.length );
    } else if ( images.length < imagesLength ) { // видаляємо зображення
      if ( calculateLines( images.length ) < calculateLines( imagesLength ) ) {
        images.length === 1 // 1ше зображення
        ? setTextareaHeight( ( prev ) =>
          prev - imageHeight - imageVerticalPadding * 2 - topSpaceToShowPlaceholder )
        : setTextareaHeight( ( prev ) => prev - imageHeight - imageBottomGap );
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
          errMessage={ errMessage }
        />
      )}
    </S.TextareaWrapper>
  );
};
