import React from 'react';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './UploadPopup.styled';

export const UploadPopup = ( { handleImageSelect } ) => {
  const handleFileChange = ( e ) => {
    const inputFile = e.target.files[ 0 ];

    if ( !inputFile ) {
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5 МБ
    if ( inputFile.size > maxSize ) {
      alert( 'Розмір файлу перевищує 5 MB. Оберіть інший файл.' );
      return;
    }

    const allowedFileFormats = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ];

    if ( !allowedFileFormats.includes( inputFile.type ) ) {
      alert(
          'Такий формат файлу не підтримується. Оберіть файл з розширенням .jpg, .png, .gif or .webp.',
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = function( { target } ) {
      handleImageSelect( target.result );
    };
    reader.readAsDataURL( inputFile );
  };

  return (
    <S.Wrapper>
      <S.UploadBtn
        type='button'
        aria-label='upload'
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
      <S.Input
        name="attachments"
        type='file'
        onChange={ handleFileChange }
        accept='image/jpeg,image/png,image/gif,image/webp'
      />
      <S.Text>Завантажити з комп’ютера</S.Text>
    </S.Wrapper>
  );
};
