import React, { useState } from 'react';
// import { Notification } from '';
import { ClassCancelation } from '../modals/ClassCancelation';
import { Modal } from '../../common/modalElements/Modal';
import { Notification } from '../../common/modalElements/Notification';
import * as S from './Card.styled';
import { LeaveReview } from '../modals/LeaveReview';

export const Card = ( { data, status } ) => {
  // eslint-disable-next-line max-len
  const {
    teacherName,
    teacherSurname,
    teacherPhoto,
    teacherPhone,
    date,
    time,
    venue,
    classes,
    price,
  } = data;
  // eslint-disable-next-line no-unused-vars
  const [ feedbackModalShown, setFeedbackModalShown ] = useState( false );
  const [ classCancelationModalShown, setClassCancelationModalShown ]
    = useState( false );
  const [ isCancelationNotifShown, setIsCancelationNotifShown ] = useState( false );
  const [ isFeedbackNotifShown, setIsFeedbackNotifShown ] = useState( false );
  const success = true;
  // const success = false; // для Notification - залежно від status code з бекенду

  const toggleFeedbackModal = () => setFeedbackModalShown( !feedbackModalShown );
  const toggleFeedbackNotifModal = () =>
    setIsFeedbackNotifShown( !isFeedbackNotifShown );

  return (
    <S.Container $status={ status }>
      <S.GeneralInfo>
        <div className="personal-data">
          <img
            src={ teacherPhoto }
            alt={ `photo of ${( teacherName, teacherSurname )}` }
          />
          <div>
            <span>
              <p className="name">{teacherName}</p>
              <p className="name">{teacherSurname}</p>
            </span>
            <p className="phone">{teacherPhone}</p>
          </div>
        </div>
        {status === 'notActive' && (
          <S.FeedbackButton
            variant="blue"
            onClick={ () => setFeedbackModalShown( true ) }
          >
            Залишити відгук
          </S.FeedbackButton>
        )}
        {status === 'active' && (
          <S.FeedbackButton
            variant="pink"
            onClick={ () => setClassCancelationModalShown( true ) }
          >
            Скасувати заняття
          </S.FeedbackButton>
        )}
      </S.GeneralInfo>
      <S.TimeTable>
        <div>
          <S.Static>Дата:</S.Static>
          <S.Dynamic>{date}</S.Dynamic>
        </div>
        <div>
          <S.Static>Час:</S.Static>
          <S.Dynamic>{time}</S.Dynamic>
        </div>
        <div>
          <S.Static>Місце:</S.Static>
          <S.Dynamic>{venue}</S.Dynamic>
        </div>
        <div>
          <S.Static>Заняття:</S.Static>
          <S.Dynamic>{classes}</S.Dynamic>
        </div>
        <div>
          <S.Static>Вартість:</S.Static>
          <S.Dynamic>{price}</S.Dynamic>
        </div>
      </S.TimeTable>
      {classCancelationModalShown && (
        <Modal onActiveModal={ () => setClassCancelationModalShown( false ) }>
          <ClassCancelation
            onActiveModal={ () => setClassCancelationModalShown( false ) }
            onNotificationShow={ () => setIsCancelationNotifShown( true ) }
          />
        </Modal>
      )}
      {isCancelationNotifShown && (
        <Modal onActiveModal={ () => setIsCancelationNotifShown( false ) }>
          <Notification
            onNotificationClose={ () => setIsCancelationNotifShown( false ) }
            success={ success }
            title={ success ? 'Заняття успішно скасовано' : 'Сталась помилка' }
            description={
              // eslint-disable-next-line max-len
              success
                ? 'Дякуємо за використання наших послуг. Ми сподіваємося побачити Вас знову найближчим часом!'
                : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
            }
          />
        </Modal>
      )}
      {feedbackModalShown && (
        <Modal onActiveModal={ toggleFeedbackModal }>
          <LeaveReview
            onFormClose={ toggleFeedbackModal }
            onShownSentModal={ toggleFeedbackNotifModal }
          />
          {/* <Feedback
                        onActiveModal={ () => setFeedbackModalShown( false ) }
                        onNotificationShow={ () => setIsFeedbackNotifShown( true ) }
                    /> */}
        </Modal>
      )}
      {isFeedbackNotifShown && (
        <Modal onActiveModal={ () => setIsFeedbackNotifShown( false ) }>
          <Notification
            onNotificationClose={ () => setIsFeedbackNotifShown( false ) }
            success={ success }
            title={ success ? 'Відгук успішно надіслано' : 'Сталась помилка' }
            description={
              success
                ? 'Дякуємо, що допомагаєте стати кращими'
                : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
            }
          />
        </Modal>
      )}
    </S.Container>
  );
};
