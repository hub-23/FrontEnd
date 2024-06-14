import { Field } from 'formik';
import styled from 'styled-components';
import { accent, white } from './variables.styled';
import { device } from './device';

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 120px 160px;

  @media ${device.md} {
    padding: 80px 40px;
  }

  @media ${device.sm} {
    padding: 80px 20px;
  }
`;

export const InputСircle = styled( Field )`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  /* -webkit-appearance: none; */
  appearance: none;
  background-color: ${white};
  margin: 0;
  color: currentColor;

  border: 1px solid ${accent};
  border-radius: 50%;
  transform: translateY(-0.075em);

  &:before {
    content: '';
    width: 12px;
    height: 12px;

    transform: translate(50%, 50%);
    transform: scale(0);
    transition: 120ms transform ease-in-out;

    border-radius: 50%;
    background-color: ${accent};
  }
  &:checked::before {
    transform: scale(1);
  }
`;
