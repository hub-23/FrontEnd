import { Button } from 'components/common/button/Button';
import styled from 'styled-components';
import { device } from 'utils/device';
import { black, grayStroke } from 'utils/variables.styled';

export const Container = styled.div`
  width: 580px;
  margin-bottom: 40px;

  @media ${device.md} {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const LessonsList = styled.ul``;

export const AddButton = styled( Button )`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 50px;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1%;
  position: relative;
  width: 272px;
  height: auto;
  gap: 12px;
  border: none;

  @media ${device.sm} {
    width: 100%;
    padding: 17px 50px;
    font-size: 16px;
    line-height: 22.4px;
  }
`;

export const SubjectTeaching = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;

  width: 100%;
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

  p {
    font-size: 20px;
  }

  @media ${device.sm} {
    padding: 13px 24px;

    font-size: 16px;
    line-height: calc(22.4 / 16);
    letter-spacing: 0.16px;
  }
`;
