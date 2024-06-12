import styled from 'styled-components';
import { device } from '../../utils/device';

export const StyledWrapper = styled.div`
  max-width: 1440px;
  min-width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media ${device.sm} {
    min-height: 100vh;
  }
`;

export const StyledContent = styled.section`
  flex-grow: 1;
`;
