import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import countries from '../../../assets/countries.json';
import {
  Article,
  BtnLogin,
  BtnText,
  ErrorText,
  FormLastStep,
  Input,
  InputCheckbox,
  LabelCheckbox,
  LabelFormUser,
  LinkPolicy,
  Modal,
  RegisterText,
  TextPolicy,
  Title,
  WrappPolicy,
  WrappRegister,
} from './ModalLastStep.staled';
import { BtnClose } from '../../common/BtnClose';
import { useHubContext } from '../../../redux/Context';
import { IconSvg } from '../../common/IconSvg';
import { PhoneSelect } from '../../common/PhoneSelect';
import { BtnRegistration } from './BtnRegistration';
import { bgColorGradientBtn, white } from '../../../utils/variables.styled';

export const ModalLastStep = ( { onActiveModal } ) => {
  const [ codeCountry, setCodeCountry ] = useState( '+380' );
  const { setShowModalLastStep, setShowModalConfirmEmail } = useHubContext();

  const schema = object( {
    phone: string()
        .matches( /^\d{3}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/, 'Невірно вказаний номер' )
        .required( 'Вкажіть ваш номер телефону' ),
    accept: string().required( 'Політики мають бути погоджені' ),
  } );

  const initialValues = {
    phone: '',
    accept: '',
  };

  const FormError = ( { name, isMarginLeft } ) => {
    return (
      <ErrorMessage
        name={ name }
        render={ ( message ) => <ErrorText $isMarginLeft={ isMarginLeft }>{message}</ErrorText> }
      />
    );
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const phone = { phone: `${codeCountry}${values.phone.replaceAll( ' ', '' )}` };
    const dataUserLastStep = { ...values, ...phone };

    console.log( 'send Data LastStep to Backend  :>> ', dataUserLastStep );

    resetForm();
    onActiveModal();
    setShowModalConfirmEmail( ( prev ) => !prev );
    // открыть модалку /Підтвердіть ваш E-mail/
  };

  const handleGetSelected = ( values ) => {
    setCodeCountry( values );
  };

  return (
    <Modal>
      <BtnClose
        xlRight="30px"
        xlTop="30px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
        click={ () => setShowModalLastStep( ( prev ) => !prev ) }
      >
        <IconSvg
          xlWidth="60px"
          xlHeight="60px"
          mdWidth="36px"
          mdHeight="36px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-close"
        />
      </BtnClose>

      <Article>
        <Title>Остaнній крок</Title>

        <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
          {( formik ) => {
            const {
              errors: { phone },
              touched,
            } = formik;

            const isDataUser = formik.initialValues.phone === formik.values.phone;
            const errPhone = phone && touched.phone;

            return (
              <FormLastStep autoComplete="on">
                <LabelFormUser htmlFor="phone" style={ { paddingTop: '2px' } }>
                  <Input
                    type="tel"
                    name="phone"
                    $isDataUser={ isDataUser }
                    $error={ errPhone }
                  />

                  <FormError name="phone" isMarginLeft={ true } />

                  <PhoneSelect
                    data={ countries }
                    valueSelect={ handleGetSelected }
                    xlHeightList="250px"
                    smHeightList="225px"
                  />
                </LabelFormUser>

                <WrappPolicy>
                  <LabelCheckbox>
                    <InputCheckbox type="checkbox" name="accept" />
                    <span></span>

                    <TextPolicy>
                      {'Я приймаю '}
                      <span>
                        <LinkPolicy>Політика конфіденційності</LinkPolicy>
                      </span>
                      {' та '}
                      <span>
                        <LinkPolicy> Умови використання</LinkPolicy>
                      </span>
                    </TextPolicy>
                  </LabelCheckbox>

                  <FormError name="accept" isMarginLeft={ true } />
                </WrappPolicy>

                <BtnRegistration
                  xlMarginBottom="63px"
                  mdMarginBottom="40px"
                  smMarginBottom="30px"
                  color={ white }
                  xlHeight="60px"
                  smHeight="45px"
                  bgColorGradient={ bgColorGradientBtn }
                  // onRegister={ 'callback' }
                >
                  <BtnText> Зареєструватись</BtnText>
                </BtnRegistration>
              </FormLastStep>
            );
          }}
        </Formik>

        <WrappRegister>
          <RegisterText>Я вже зареєстрваний</RegisterText>
          <BtnLogin>Увійти</BtnLogin>
        </WrappRegister>
      </Article>
    </Modal>
  );
};

// ================================================================================================
// import React, { useState } from 'react';
// import { Formik, ErrorMessage } from 'formik';
// import { object, string } from 'yup';
// import countries from '../../assets/countries.json';
// import {
//   Article,
//   BtnLogin,
//   BtnText,
//   ErrorText,
//   FormLastStep,
//   Input,
//   InputCheckbox,
//   LabelCheckbox,
//   LabelFormUser,
//   LinkPolicy,
//   Modal,
//   RegisterText,
//   TextPolicy,
//   Title,
//   WrappPolicy,
//   WrappRegister,
// } from './ModalLastStep.staled';
// import { BtnClose } from '../common/BtnClose';
// import { useHubContext } from '../../redux/Context';
// import { IconSvg } from '../common/IconSvg';
// import { PhoneSelect } from '../common/PhoneSelect';
// import { BtnRegistration } from './BtnRegistration';
// import { bgColorGradientBtn, white } from '../../utils/variables.styled';

// export const ModalLastStep = ( { onActiveModal } ) => {
//   const [ codeCountry, setCodeCountry ] = useState( '+380' );
//   const { setShowModalLastStep, setShowModalConfirmEmail } = useHubContext();

//   const schema = object( {
//     phone: string()
//         .matches( /^\d{3}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/, 'Невірно вказаний номер' )
//         .required( 'Вкажіть ваш номер телефону' ),
//     accept: string().required( 'Політики мають бути погоджені' ),
//   } );

//   const initialValues = {
//     phone: '',
//     accept: '',
//   };

//   const FormError = ( { name, isMarginLeft } ) => {
//     return (
//       <ErrorMessage
//         name={ name }
//         render={ ( message ) => <ErrorText $isMarginLeft={ isMarginLeft }>{message}</ErrorText> }
//       />
//     );
//   };

//   const handleSubmit = ( values, { resetForm } ) => {
//     const phone = { phone: `${codeCountry}${values.phone.replaceAll( ' ', '' )}` };
//     const dataUserLastStep = { ...values, ...phone };

//     console.log( 'send Data LastStep to Backend  :>> ', dataUserLastStep );

//     resetForm();
//     onActiveModal();
//     setShowModalConfirmEmail( ( prev ) => !prev );
//     // открыть модалку /Підтвердіть ваш E-mail/
//   };

//   const handleGetSelected = ( values ) => {
//     setCodeCountry( values );
//   };

//   return (
//     <Modal>
//       <BtnClose
//         xlRight="30px"
//         xlTop="30px"
//         mdRight="15px"
//         mdTop="15px"
//         smRight="10px"
//         smTop="10px"
//         click={ () => setShowModalLastStep( ( prev ) => !prev ) }
//       >
//         <IconSvg
//           xlWidth="60px"
//           xlHeight="60px"
//           mdWidth="36px"
//           mdHeight="36px"
//           smWidth="24px"
//           smHeight="24px"
//           icon="icon-close"
//         />
//       </BtnClose>

//       <Article>
//         <Title>Остaнній крок</Title>

//         <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
//           {( formik ) => {
//             const {
//               errors: { phone },
//               touched,
//             } = formik;

//             const isDataUser = formik.initialValues.phone === formik.values.phone;
//             const errPhone = phone && touched.phone;

//             return (
//               <FormLastStep autoComplete="on">
//                 <LabelFormUser htmlFor="phone" style={ { paddingTop: '2px' } }>
//                   <Input
//                     type="tel"
//                     name="phone"
//                     $isDataUser={ isDataUser }
//                     $error={ errPhone }
//                   />

//                   <FormError name="phone" isMarginLeft={ true } />

//                   <PhoneSelect
//                     data={ countries }
//                     valueSelect={ handleGetSelected }
//                     xlHeightList="250px"
//                     smHeightList="225px"
//                   />
//                 </LabelFormUser>

//                 <WrappPolicy>
//                   <LabelCheckbox>
//                     <InputCheckbox type="checkbox" name="accept" />
//                     <span></span>

//                     <TextPolicy>
//                       {'Я приймаю '}
//                       <span>
//                         <LinkPolicy>Політика конфіденційності</LinkPolicy>
//                       </span>
//                       {' та '}
//                       <span>
//                         <LinkPolicy> Умови використання</LinkPolicy>
//                       </span>
//                     </TextPolicy>
//                   </LabelCheckbox>

//                   <FormError name="accept" isMarginLeft={ true } />
//                 </WrappPolicy>

//                 <BtnRegistration
//                   xlMarginBottom="63px"
//                   mdMarginBottom="40px"
//                   smMarginBottom="30px"
//                   color={ white }
//                   xlHeight="60px"
//                   smHeight="45px"
//                   bgColorGradient={ bgColorGradientBtn }
//                   // onRegister={ 'callback' }
//                 >
//                   <BtnText> Зареєструватись</BtnText>
//                 </BtnRegistration>
//               </FormLastStep>
//             );
//           }}
//         </Formik>

//         <WrappRegister>
//           <RegisterText>Я вже зареєстрваний</RegisterText>
//           <BtnLogin>Увійти</BtnLogin>
//         </WrappRegister>
//       </Article>
//     </Modal>
//   );
// };
