import styled from 'styled-components';
import { device } from '../../../../../utils/device';
import { primary, white } from 'utils/variables.styled';

export const ButtonToggle = styled.button`
  width: 32px;
  height: 32px;
  margin: 0px 60px;
  border: none;
  background: ${primary};
  color: ${white};

  @media ${device.sm} {
    width: 24px;
    height: 24px;
    margin: 0px 20px;
  }
`;
