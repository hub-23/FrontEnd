import React from 'react';
import { Formik } from 'formik';
// import { object, string, array } from 'yup';
import { GeneralInfo } from './GeneralInfo/GeneralInfo';
import * as S from './PersonalInfo.styled';


export const PersonalInfo = () => {
	// const schema = object( {
	// 	name: string()
	// 	  .min( 2, 'Вкажіть мінімум 2 літери, але не більше 30' )
	// 	  .max( 30, 'Вкажіть мінімум 2 літери, але не більше 30' )
	// 	  .matches( nameExp, 'Ім’я має містити українські або англійські літери' )
	// 	  .required( 'Вкажіть ваше ім’я' ),
	// 	email: string()
	// 	  .email( 'Невірно вказано e-mail' )
	// 	  .trim()
	// 	  .required( 'Вкажіть ваш e-mail' ),
	// 	phone: string().required( 'Вкажіть ваш номер телефону' ),
	// 	topic: string()
	// 	  .test( 'is-valid-topic', customErrorMessage, value => {
	// 		return notificationTopics.includes( value );
	// 	  } )
	// 	  .required( 'Вкажіть тему повідомлення' ),
	// 	message: string().required( 'Опишіть проблему' ),
	// 	attachments: array(),
	// } );
	
	// const initialValues = {
	// 	name: localStorage.getItem( 'question-form-name' ) || '',
	// 	email: localStorage.getItem( 'question-form-email' ) || '',
	// 	phone: localStorage.getItem( 'question-form-phone' ) || '',
	// 	topic: localStorage.getItem( 'question-form-topic' ) || '',
	// 	message: localStorage.getItem( 'question-form-message' ) || '',
	// 	attachments: images || [],
	// };

	const handleSubmit = ( values, { resetForm } ) => {
		console.log( 'submit' );
    };

	return (
	  <>
		<Formik
			// initialValues={ initialValues }
			// validationSchema={ schema }
			onSubmit={ handleSubmit }
		>
			{formik => {
				// const {
				// 	errors: { name, email, phone, topic, message },
				// 	touched,
				// 	values,
				// 	setValues,
				// 	setTouched,
				// } = formik;

				// const errName = name && touched.name;
				// const errEmail = email && touched.email;
				// const errPhone = phone && touched.phone;
				// const errTopic = topic && touched.topic;
				// const errMessage = message && touched.message;

		        return (
					<S.FormFild autoComplete="off">
						<S.Section>
							<S.Title>Основна інформація</S.Title>
							<GeneralInfo />
						</S.Section>
						<S.Section>
							<S.Title>Контактна інформація</S.Title>
						</S.Section>
						<S.Section>
							<S.Title>Зміна пароля</S.Title>
						</S.Section>

						<S.SaveBtn
							type='submit'
							variant='blueGradientedBorder'
							onActiveModal={ () => { console.log( 'click' ) } }
						>
							Зберегти зміни
						</S.SaveBtn>
					</S.FormFild>
		        );
			}}
		</Formik>
		<S.DelAccauntSec>
			<button
		     	type='button'
				onClick={ () => { console.log( 'click' ); } }
			>
				Видалити аккаунт
			</button>
			<p>Ви не зможете відновити профіль після його видалення</p>
		</S.DelAccauntSec>
	  </>
	)
}
