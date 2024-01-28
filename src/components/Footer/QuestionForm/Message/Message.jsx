import React, { useState } from 'react';
import { FormError } from '../FormError/FormError';
import * as S from './Message.styled';
import { IconSvg } from '../../../common/IconSvg';
import { UploadNotice } from '../UploadNotice/UploadNotice';
import { ImagesList } from '../ImagesList/ImagesList';


export const Message = ( { errMessage, allowedFileFormats, handleChange, values } ) => {
  const [ isUploadNoticeShown, setIsUploadNoticeShown ] = useState( false );
  const [ images, setImages ] = useState( [] );

  const handleUploadNoticeShown = () => {
    setIsUploadNoticeShown( !isUploadNoticeShown );
  };

  const handleImageSelect = ( value ) => {
    // formik.setFieldValue( 'file', value );
    setImages( value );
  };

  return (
    <div>
      <S.InputWrapper $error={ errMessage } $value={ values.message } >
        <S.Textarea
          name="message"
          component="textarea"
          placeholder="Повідомлення"
          onChange={ handleChange }
          $error={ errMessage }
        />
        { images && (
          <ImagesList
            images={ images }
            handleImagesSaving={ setImages }
            errMessage={ errMessage }
          />
        )}
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
      </S.InputWrapper>
      <FormError name="message" isMarginLeft={ true } />
    </div>
  );
};
