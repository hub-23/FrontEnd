import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../common/button/Button';
import { device } from 'utils/device';

export const FormFild = styled( Form )`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;

  @media ${device.md} {
    margin-left: 0;
    padding-inline: 40px;
  }

  @media ${device.sm} {
    padding-inline: 20px;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 48px;
<<<<<<< student_account

  @media ${device.md} {
    flex-direction: column;
    gap: 20px;
  }
=======
  /* border: 1px dashed blue; */
>>>>>>> dev
`;

export const Title = styled.h2`
  width: 172px;
  padding-top: 12px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 24px;
  font-weight: 500;
  line-height: calc(33.6 / 24);
<<<<<<< student_account

  @media ${device.md} {
    width: auto;
    font-size: 20px;
    font-weight: 500;
    line-height: calc(28 / 20);
  }

  @media ${device.sm} {
    font-size: 16px;
    font-weight: 600;
    line-height: calc(22.4 / 16);
  }
=======
  /* border: 1px dashed red; */
>>>>>>> dev
`;

export const SaveBtn = styled( Button )`
  width: auto;
  height: auto;
  padding: 14px 32px;
  margin-top: 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc(20 / 20);

  @media ${device.md} {
    padding: 14px 32px;
    font-size: 20px;
    font-weight: 600;
    line-height: calc(20 / 20);
  }

  @media ${device.sm} {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: calc(22.4 / 16);
  }
`;

export const DelAccauntSec = styled.section`
  margin-top: 72px;
  text-align: center;

  @media ${device.md} {
    margin-top: 48px;
  }

  @media ${device.sm} {
    margin-top: 24px;
  }

  button {
    margin-bottom: 16px;
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.color || props.theme.colors.accent};
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: calc(28 / 20);

    @media ${device.md} {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 600;
      line-height: calc(28 / 20);
    }
    @media ${device.sm} {
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
      line-height: calc(22.4 / 16);
    }
  }
  p {
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    line-height: calc(19.6 / 14);

    @media ${device.md} {
      margin-bottom: 80px;
    }

    @media ${device.sm} {
      font-size: 12px;
      line-height: calc(16.8 / 12);
    }
  }
`;
