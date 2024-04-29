import React, {  useState } from 'react'
import * as S from './BookingCard.styled'
import { Modal } from 'components/common/modalElements/Modal';
import { CancelModal, DefaultModal } from '../BookingModals';
import createLessonDetailsList from './createLessonDetailsList';

const BookingCard = ( { classData, selectedType } ) => {
    const [ isModalOpen, setIsModalOpen ] = useState( false );
    
    const { studentName, studentPhoto } = classData;
        const handleModalOpen = ( e ) => {
        setIsModalOpen( !isModalOpen )
        }

  return (
    <S.Item selectedType={ selectedType === 'active' }>
        <div>
             <div>
                  <img src={ studentPhoto } alt={ studentName } width={ 80 } height={ 80 }/>
                  <p>{studentName}</p>
             </div>
              <button
                  title='Скасувати заняття не можливо, пізніше ніж за 3 години до його початку.'
                  type="button"
                  onClick={ handleModalOpen }
              >
                  
                  Скасувати заняття
              </button>
          </div>
          <ul>
              {createLessonDetailsList( classData ).map( ( { title, value } ) => {
                  return <li key={ title }>
                      <p>
                          {title}
                          :
                      <span>{value}</span>
                      </p>
                  </li>
            } ) }
          </ul>
          {isModalOpen && <Modal>
              <DefaultModal>
                  <CancelModal classData={ classData } />
          </DefaultModal>
          </Modal>}
    </S.Item>
  )
}

export default BookingCard
