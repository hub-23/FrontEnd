import styled from 'styled-components';
import { device } from 'utils/device';
import { black, grayStroke } from 'utils/variables.styled';

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  gap: 36px;
  margin-bottom: 40px;
  position: relative;

  @media ${device.md} {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const Email = styled.div`
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

  @media ${device.sm} {
    padding: 13px 24px;

    font-size: 16px;
    line-height: calc(22.4 / 16);
    letter-spacing: 0.16px;
  }
`;
