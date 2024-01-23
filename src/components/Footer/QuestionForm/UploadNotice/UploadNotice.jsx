import React, { useState, useEffect } from 'react';
// import { useField } from 'formik';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './UploadNotice.styled';

export const UploadNotice = ( { handleUploadNoticeShown, allowedFileFormats, handleImageSelect } ) => {
  const [ inputActive, setInputActive ] = useState( false );
  const [ imageSources, setImageSources ] = useState( [] );

  //   const [ , , helpers ] = useField( 'file' );

  const handleFileChange = ( e ) => {
    const inputFile = e.target.files[ 0 ];
    // helpers.setValue( inputFile );

    if ( !inputFile ) {
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5 МБ
    if ( inputFile.size > maxSize ) {
      alert( 'Розмір файлу перевищує 5 MB. Оберіть інший файл.' );
      return;
    }

    if ( !allowedFileFormats.includes( inputFile.type ) ) {
      alert(
          'Такий формат файлу не підтримується. Оберіть файл з розширенням .jpg, .png, .gif or .webp.',
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = function( event ) {
      setImageSources( ( prevImageSources ) => [ ...prevImageSources, event.target.result ] );
    };

    reader.readAsDataURL( inputFile );

    // const formData = new FormData();
    // if ( inputFile ) formData.set( 'file', inputFile );
  };
  useEffect( () => {
    handleImageSelect( imageSources );
  }, [ imageSources ] );

  return (
    <S.Wrapper>
      <S.UploadBtn
        type='button'
        aria-label='upload'
        onClick={ () => setInputActive( !inputActive ) }
      >
        <IconSvg
          xlWidth="24px"
          xlHeight="24px"
          mdWidth="24px"
          mdHeight="24px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-upload"
        />
      </S.UploadBtn>
      <S.Text>Завантажити з комп’ютера</S.Text>

      {inputActive && (
        <S.Input
          name="file"
          type='file'
          onChange={ ( e ) => {
            handleFileChange( e );
            // handleUploadNoticeShown();
          } }
          accept='image/jpeg,image/png,image/gif,image/webp'
        />
      )}
    </S.Wrapper>
  );
};
