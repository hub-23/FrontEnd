import React from 'react';
import { BtnClose } from '../../common/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import * as S from './QuestionForm.styled';


export const QuestionForm = ( { onActiveModal } ) => {
  return (
    <S.QuestionFormContainer>
      <BtnClose
        xlRight="16px"
        xlTop="16px"
        mdRight="15px"
        mdTop="15px"
        smRight="12px"
        smTop="12px"
        aria-label='select country'
        click={ onActiveModal }
      >
        <IconSvg
          xlWidth="36px"
          xlHeight="36px"
          mdWidth="36px"
          mdHeight="36px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-close"
        />
      </BtnClose>

      <S.Title>Залишились запитання?</S.Title>
      <S.Text>
        Напишіть своє повідомлення використовуючи форму або зверніться напряму за електронною адресою
      </S.Text>
      {/* <S.InputWrapper> */}
      <div>
        <form>
          <input type="text" placeholder='Ім&#39;я' />
          <input type="text" placeholder='Електронна адреса' />
          <input type="text" />
          <input type="text" placeholder='Тема повідомлення' />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div>
            {/* icon */}
            <p>Ці поля є обов&apos;язковими до заповнення</p>
            <S.SubmitBtn
              type='submit'
              variant='blue'
              width='100%'
              height='60px' // моб - '50px'
              borderRadius='16px 0' // моб - '20px 0'
              onClick={ onActiveModal }
            >
              Надіслати
            </S.SubmitBtn>
          </div>
        </form>
        {/* <S.Input
          type="search" // 'text' - without reset
          name="filter"
          placeholder='Введіть назву країни'
          // value={ inputValue }
          // onChange={ handleChange }
          list="autocomplete-options"
          autoFocus
        /> */}
      </div>
      {/* </S.InputWrapper> */}
    </S.QuestionFormContainer>
  );
};
