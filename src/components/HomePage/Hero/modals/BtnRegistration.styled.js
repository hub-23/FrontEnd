import styled from 'styled-components';
import { device } from '../../../../utils/device';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-bottom: ${( { $xlMarginBottom } ) => $xlMarginBottom};
  width: 100%;
  height: ${( { $xlHeight } ) => $xlHeight};

  border-radius: 20px 0px;
  border: 1px solid ${( { $strokeColor } ) => $strokeColor};
  color: ${( { $color } ) => $color};
  background-color: ${( { $bgColor } ) => $bgColor};
  background: linear-gradient(${( { $bgColorGradient } ) => $bgColorGradient});

  @media ${device.md} {
    margin-bottom: ${( { $mdMarginBottom } ) => $mdMarginBottom};
    height: ${( { $mdHeight } ) => $mdHeight};
  }

  @media ${device.sm} {
    margin-bottom: ${( { $smMarginBottom } ) => $smMarginBottom};
    height: ${( { $smHeight } ) => $smHeight};
  }
`;
