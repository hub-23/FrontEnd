import React from 'react';
import { IconSvg } from '../../../../common/IconSvg';
import { FileUpload } from 'components/modalElements/FileUpload';
import * as S from './UploadPopup.styled';

export const UploadPopup = ( { handleImageSelect } ) => {
  return (
    <S.Wrapper>
      <label htmlFor="file-input">
        <S.UploadBtn>
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            icon="icon-upload"
          />
        </S.UploadBtn>
      </label>
      <FileUpload onImageSelect={ handleImageSelect } id='file-input' />
      <S.Text>Завантажити з комп’ютера</S.Text>
    </S.Wrapper>
  );
};
