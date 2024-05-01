import React, {  useState } from 'react'
import * as S from './BookingCard.styled'
import { Modal } from 'components/common/modalElements/Modal';
import createLessonDetailsList from './createLessonDetailsList';
import DefaultModal from '../Notifications/DefaultModal/DefaultModal';

const BookingCard = ( { classData, selectedType } ) => {
    const [ isModalOpen, setIsModalOpen ] = useState( false );
    const { studentName, studentPhoto, studentPhone, studentSurname } = classData;

    const toggleModal = (  ) => {
        setIsModalOpen( !isModalOpen )
    }
    
  return (
    <S.Item selectedType={ selectedType === 'active' }>
        <S.StudentInfo>
             <S.StudentInfoBox>
                  <S.StudentImage selectedType={ selectedType === 'active' }
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
                  variant = { selectedType === 'active' ? 'pink' : 'grey' }
                  title='Скасувати заняття не можливо, пізніше ніж за 3 години до його початку.'
                  type="button"
                  onClick={ toggleModal }
                  disabled={ selectedType === 'inactive' }
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
          {isModalOpen && <Modal onActiveModal={ toggleModal }>
              <DefaultModal classData={ classData } toggleModal={ toggleModal } />
          </Modal>}
    </S.Item>
  )
}

export default BookingCard
