import styled from 'styled-components';
import {
  accent,
  black,
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  white,
} from '../../../../utils/variables.styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import checkbox0 from '../../../../assets/home/modal/checkbox0.svg';
import checkbox1 from '../../../../assets/home/modal/checkbox1.svg';
import { device } from '../../../../utils/device';

export const Modal = styled.div`
  position: relative;

  max-width: 775px;
  margin: 0 20px;
  padding: 54px 148px 50px 148px;

  max-height: calc(100vh - 40px);

  overflow-y: auto;
  scroll-behavior: smooth;

  border-radius: 20px 0px;
  background-color: ${white};

  @media ${device.md} {
    max-height: calc(100vh - 50px);
    padding: 50px;
  }

  @media ${device.sm} {
    margin: 0 15px;
    padding: 40px 23px;
  }
`;

export const Article = styled.article`
  margin: 0 auto;
  max-width: 480px;

  @media ${device.md} {
    max-width: 419px;

    & > :last-child {
      text-align: center;
    }
  }

  @media ${device.sm} {
    max-width: initial;
  }
`;

export const Title = styled.p`
  margin-bottom: 30px;
  width: 100%;

  text-align: center;

  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.26px;
  color: ${black};

  @media ${device.md} {
    margin-bottom: 38px;
  }

  @media ${device.sm} {
    margin-bottom: 30px;
  }
`;

export const FormLastStep = styled( Form )`
  display: flex;
  flex-direction: column;
`;

export const LabelFormUser = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const Input = styled( Field )`
  width: 100%;
  height: 60px;
  padding: 16px 32px 16px 160px;

  font-size: 20px;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;

  border-width: 1px;
  border-style: solid;

  border-radius: 20px 0px;
  border-color: ${( { $isDataUser } ) =>
    $isDataUser ? grayStroke : borderGreen};
  border-color: ${( { $error } ) => $error && `${borderError}`};
  color: ${black};
  background-color: ${white};

  @media ${device.sm} {
    padding: 15px 20px;
    padding: 15px 20px 15px 145px;
    height: 45px;

    font-size: 16px;
    line-height: calc(22.4 / 16);
    letter-spacing: 0.16px;
  }

  &:focus {
    outline: 1px solid ${borderBlue};
  }

  &:placeholder-shown {
    color: ${grayText};
    border-color: ${( { $error } ) => ( $error ? borderError : grayStroke )};
  }
`;

export const WrappPolicy = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 34px;
  margin-bottom: 20px;

  @media ${device.md} {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media ${device.sm} {
    margin-top: 22px;
    margin-bottom: 25px;
  }
`;

export const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 9px;

  font-size: 20px;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;

  @media ${device.sm} {
    font-size: 16px;
  }
`;

export const InputCheckbox = styled( Field )`
  appearance: none;
  position: absolute;

  & + span {
    width: 24px;
    height: 24px;
    background-image: url(${checkbox0});
  }

  &:checked + span {
    background-image: url(${checkbox1});
  }

  @media ${device.sm} {
    & + span {
      padding-right: 15px;
    }
  }
`;

export const TextPolicy = styled.p`
  line-height: calc(15.82 / 14);

  color: ${black};
`;

export const LinkPolicy = styled( Link )`
  font-weight: 500;
  text-decoration-line: underline;

  color: ${black};
`;

export const ErrorText = styled.p`
  display: inline;
  margin-left: ${( { $isMarginLeft } ) => ( $isMarginLeft ? '19px' : '0' )};

  line-height: calc(15.82 / 14);

  color: ${accent};
`;

export const BtnText = styled.p`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.24px;

  color: ${white};

  @media ${device.sm} {
    font-size: 18px;
    letter-spacing: 0.18px;
  }
`;

export const WrappRegister = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media ${device.sm} {
    flex-direction: column;
  }
`;

export const RegisterText = styled.p`
  color: ${grayText};
  font-size: 20px;
  font-weight: 600;

  @media ${device.sm} {
    font-size: 16px;
  }
`;

export const BtnLogin = styled.button`
  border: none;
  background: initial;

  font-size: 20px;
  font-weight: 600;

  color: ${black};

  @media ${device.sm} {
    font-size: 16px;
  }
`;
