import React, { useState } from 'react';
import * as S from './Card.styled';


export const Card = ( { data } ) => {
    // eslint-disable-next-line max-len
    const { teacherName, teacherSurname, teacherPhoto, teacherPhone, date, time, venue, classes, price } = data;
    // eslint-disable-next-line no-unused-vars
    const [ feedbackModal, setFeedbackModal ] = useState( false );

    return (
        <S.Container>
            <S.GeneralInfo>
                <div className='personal-data'>
                    <img src={ teacherPhoto } alt={ `photo of ${ teacherName, teacherSurname }` } />
                    <div>
                        <span>
                            <p className='name'>{ teacherName }</p>
                            <p className='name'>{ teacherSurname }</p>                            
                        </span>
                        <p className='phone'>{ teacherPhone }</p>
                    </div>                
                </div>
                <S.FeedbackButton 
                  variant='blue'
                  onClick={ () => setFeedbackModal( true ) }
                >
                    Залишити відгук
                </S.FeedbackButton>
            </S.GeneralInfo>
            <S.TimeTable>
                <div>
                    <S.Static>Дата:</S.Static>
                    <S.Dynamic>{ date }</S.Dynamic>
                </div>
                <div>
                    <S.Static>Час:</S.Static>
                    <S.Dynamic>{ time }</S.Dynamic>
                </div>
                <div>
                    <S.Static>Місце:</S.Static>
                    <S.Dynamic>{ venue }</S.Dynamic>
                </div>
                <div>
                    <S.Static>Заняття:</S.Static>
                    <S.Dynamic>{ classes }</S.Dynamic>
                </div>
                <div>
                    <S.Static>Вартість:</S.Static>
                    <S.Dynamic>{ price }</S.Dynamic>
                </div>
            </S.TimeTable>
        </S.Container>
    );
};
