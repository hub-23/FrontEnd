import styled from 'styled-components';
import { device } from 'utils/device';

export const List = styled.ul`
  @media ${device.md} {
    display: flex;
    padding-inline: 40px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.08);
  }

  @media ${device.sm} {
    padding-inline: 20px;
  }
`;
