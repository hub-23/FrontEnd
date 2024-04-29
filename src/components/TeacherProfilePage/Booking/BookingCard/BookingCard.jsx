import React, {  useState } from 'react'
import * as S from './BookingCard.styled'
import { Modal } from 'components/common/modalElements/Modal';
import { CancelModal, DefaultModal } from '../BookingModals';
import createLessonDetailsList from './createLessonDetailsList';

const BookingCard = ( { classData, selectedType } ) => {
    const [ isModalOpen, setIsModalOpen ] = useState( false );
    
    const { studentName, studentPhoto, studentPhone, studentSurname } = classData;

        const handleModalOpen = ( e ) => {
        setIsModalOpen( !isModalOpen )
        }

  return (
    <S.Item selectedType={ selectedType === 'active' }>
        <S.StudentInfo>
             <S.StudentInfoBox>
                  <S.StudentImage
                   selectedType={ selectedType === 'active' }
                      src={ studentPhoto } alt={ studentName } width={ 80 } height={ 80 } />
                  <div>
                      <S.StudentName>
                          {studentName}
                          {' '}
                          {studentSurname}
                      </S.StudentName>
                      <p>{studentPhone}</p>
                  </div>
             </S.StudentInfoBox>
              <S.CancelBtn
              selectedType={ selectedType === 'active' }
                  title='Скасувати заняття не можливо, пізніше ніж за 3 години до його початку.'
                  type="button"
                  onClick={ handleModalOpen }
              >
                  Скасувати заняття
              </S.CancelBtn>
          </S.StudentInfo>
          <S.LessonDetails>
              {createLessonDetailsList( classData ).map( ( { title, value } ) => {
                  return <S.LessonDetailsItem key={ title }>
                      <S.LessonDetailsTitle>
                          {title}
                          :
                      </S.LessonDetailsTitle>
                          <S.LessonDetailsValue>{value}</S.LessonDetailsValue>
                  </S.LessonDetailsItem>
            } ) }
          </S.LessonDetails>
          {isModalOpen && <Modal>
              <DefaultModal>
                  <CancelModal classData={ classData } />
          </DefaultModal>
          </Modal>}
    </S.Item>
  )
}

export default BookingCard
