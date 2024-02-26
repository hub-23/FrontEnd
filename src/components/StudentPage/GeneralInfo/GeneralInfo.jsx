import React from 'react';
import sprite from '../../../assets/sprite.svg';
import * as S from './GeneralInfo.styled';

export const GeneralInfo = () => {
    const handleModalOpen = () => {
        console.log( 'click' );
    };

    return (
        <S.Container>
            <S.ProfilePhoto>
                <div className="circle">
                    <p className="circle--text">АІ</p>
                    <button 
                        type='button' 
                        aria-label='add image'
                        onClick={ () => handleModalOpen }
                    >
                        <svg width="16px" height="16px">
                            <use href={ `${sprite}#icon-add-avatar` }></use>
                        </svg>
                    </button>
                </div>
                <div className="text">
                    <p>Завантажте зображення профілю</p>
                    <p>Розмір файлу не менше 300px × 300px. Формат JPG чи PNG.</p>
                </div>
            </S.ProfilePhoto>
        </S.Container>
    );
};
