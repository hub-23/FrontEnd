import styled from 'styled-components';
import { black, grayStroke, white } from '../../utils/variables.styled';
import { device } from '../../utils/device';

export const PhoneCode = styled.div`
  position: absolute;
  top: ${( { $positionTop } ) => $positionTop};
  left: ${( { $positionLeft } ) => $positionLeft};
  width: ${( { $isShow } ) => $isShow && '100%'};
  z-index: 1;
  cursor: pointer;

  @media ${device.sm} {
    top: 9px;
  }
`;

export const TextWrapp = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  margin-right: 2px;
  font-size: 24px;
`;

export const TextCode = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: calc(28 / 20);
  letter-spacing: 0.2px;

  color: ${black};

  @media ${device.sm} {
    font-size: 16px;
    line-height: calc(22.4 / 16);
    letter-spacing: 0.16px;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  margin-left: -32px;
  padding: 20px 32px;
  width: 100%;
  height: ${( { $xlHeight } ) => $xlHeight};

  border-width: 1px;
  border-style: solid;
  border-radius: 20px 0px;
  border-color: ${grayStroke};

  background-color: ${white};
  overflow-y: auto;
  scroll-behavior: smooth;

  & > :not(:last-child) {
    margin-bottom: 12px;
  }

  @media ${device.md} {
    height: ${( { $mdHeight } ) => $mdHeight};
  }

  @media ${device.sm} {
    height: ${( { $smHeight } ) => $smHeight};
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  & > p {
    font-size: ${( { $xlFontSizeList } ) => $xlFontSizeList || '16px'};
    font-weight: 400;
    line-height: calc(22.4 / 16);
    color: ${black};

    @media ${device.md} {
      font-size: ${( { $mdFontSizeList } ) => $mdFontSizeList || '16px'};
    }

    @media ${device.sm} {
      font-size: ${( { $smFontSizeList } ) => $smFontSizeList || '16px'};
    }
  }

  & > :nth-child(1) {
    margin-right: 12px;
    font-size: 24px; // розмір відноситься до флагу
  }

  & > :nth-child(2) {
    margin-right: 8px;
  }
`;
