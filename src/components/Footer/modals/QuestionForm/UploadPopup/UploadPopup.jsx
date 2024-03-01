import React from 'react';
import { IconSvg } from '../../../../common/IconSvg';
import { FileUploadInput } from 'components/common/modalElements/FileUploadInput';
import * as S from './UploadPopup.styled';

export const UploadPopup = ( { handleImageSelect } ) => {
  return (
    <S.Wrapper>
      <label htmlFor="file-input">
        <S.UploadBtn>
          <IconSvg xlWidth="24px" xlHeight="24px" icon="icon-upload" />
        </S.UploadBtn>
      </label>
      <FileUploadInput
        onImageSelect={ handleImageSelect }
        id="file-input"
        $display="none"
      />
      <S.Text>Завантажити з комп’ютера</S.Text>
    </S.Wrapper>
  );
};
