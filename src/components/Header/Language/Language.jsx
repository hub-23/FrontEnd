import React, { useState } from 'react';
import * as S from './Language.styled';

export const Language = () => {
  const [ active, setActive ] = useState( 'UA' );
  // console.log( 'active:', active );

  return (
    <S.LanguageWrapper>
      <S.LanguageBtn
        type='button'
        onClick={ () => setActive( 'UA' ) }
        $active={ active === 'UA' ? 'true' : 'false' }
      >
        UA
      </S.LanguageBtn>
      <S.Divider></S.Divider>
      <S.LanguageBtn
        type='button'
        onClick={ () => setActive( 'EN' ) }
        $active={ active === 'EN' ? 'true' : 'false' }
      >
        EN
      </S.LanguageBtn>
    </S.LanguageWrapper>
  );
};
