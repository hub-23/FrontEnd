import React, { useState } from 'react'
import * as S from './BookingCard.styled'
import { Modal } from 'components/common/modalElements/Modal';
import { CancelModal, DefaultModal } from '../BookingModals';

const BookingCard = ( { classData } ) => {
    const [ isModalOpen, setIsModalOpen ] = useState( false );
    
    const { studentName } = classData;
        const handleModalOpen = ( e ) => {
        setIsModalOpen( !isModalOpen )
        }

  return (
    <S.Item>
          <p>{studentName}</p>
          <button
              title='Скасувати заняття не можливо, пізніше ніж за 3 години до його початку.'
              type="button"
              onClick={ handleModalOpen }
          >
              
              Скасувати заняття
          </button>
          {isModalOpen && <Modal>
              <DefaultModal>
                  <CancelModal classData={ classData } />
          </DefaultModal>
          </Modal>}
    </S.Item>
  )
}

export default BookingCard
