import React, { useState } from 'react';
import { Modal } from '../../modalElements/Modal';
import { PhotoHandler } from './PhotoHandler';
// import { Input } from '../../modalElements/Input';
import sprite from '../../../assets/sprite.svg';
import * as S from './GeneralInfo.styled';

export const GeneralInfo = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    return (
        <S.Container>
            <S.ProfilePhoto>
                <div className="circle">
                    <p className="circle--text">АІ</p>
                    <button 
                        type='button' 
                        aria-label='add image'
                        onClick={ () => setModalOpen( true ) }
                    >
                        <svg width="16px" height="16px" className='default'>
                            <use href={ `${sprite}#icon-add-avatar` }></use>
                        </svg>
                        <svg width="16px" height="16px" className='active'>
                            <use href={ `${sprite}#icon-add-avatar-hover` }></use>
                        </svg>
                    </button>
                </div>
                <div className="text">
                    <p>Завантажте зображення профілю</p>
                    <p>Розмір файлу не менше 300px × 300px. Формат JPG чи PNG.</p>
                </div>
            </S.ProfilePhoto>

            {/* <Input
                  type="text"
                  name="name"
                  placeholder="Ім’я"
                  isStar={ true }
                  error={ errName }
                  value={ values.name }
                  component='student-general-info' // for SaveToLocalStorage (частина нази ключа)
            /> */}

            { modalOpen && (
                <Modal onActiveModal={ () => setModalOpen( false ) }>
                    <PhotoHandler onPhotoHandlerClose={ () => setModalOpen( false ) } />
                </Modal>
            ) }
        </S.Container>
    );
};
