import { Button } from 'components/common/button/Button';
import { Field } from 'formik';
import styled from 'styled-components';
import { device } from 'utils/device';
import { black, grayStroke, white } from 'utils/variables.styled';

export const Modal = styled.div`
  position: relative;

  max-width: 768px;
  /* margin: 0 20px; */
  padding: 48px 144px 52px 144px;

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
    /* max-height: calc(100vh - 40px); */
  }
`;

export const Article = styled.article`
  margin: 0 auto;
  width: 480px;

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

export const Title = styled.h3`
  margin-bottom: 12px;
  text-align: center;

  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 24px;
  font-weight: 500;
  line-height: calc(33.6 / 24);

  color: ${props => props.color || props.theme.colors.black};

  @media ${device.sm} {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;

  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.sm} {
    font-size: 16px;
  }
`;

export const Classes = styled.div`
  width: 100%;
  /* height: 60px; */
  margin-bottom: 24px;
  padding: 16px 32px;

  font-size: 20px;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 16px 0;
  border-color: ${grayStroke};

  color: ${black};
  background-color: ${props => props.color || props.theme.colors.white};

  @media ${device.sm} {
    height: 48px;
    padding: 13px 24px;

    font-size: 16px;
    line-height: calc(22.4 / 16);
    letter-spacing: 0.16px;
  }
`;

export const FeedbackFild = styled( Field )`
  width: 100%;
  min-height: 120px;
  margin-bottom: 4px;
  padding: 16px 32px;
  resize: vertical;

  font-size: 20px;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 16px 0;
  border-color: ${grayStroke};
`;

export const Btn = styled( Button )`
  /* width: 298px; */
  width: 100%;
  height: 60px;
  margin-top: 36px;

  font-size: 20px;
  font-weight: 600;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;
`;
