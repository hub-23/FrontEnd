import styled from 'styled-components';
import { device } from 'utils/device';

export const Container = styled.div`
  width: 580px;
  margin-bottom: 40px;

  @media ${device.md} {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.sm} {
    flex-direction: column;
    gap: 32px;
  }
`;

export const ImagesList = styled.ul`
  display: flex;
  gap: 20px;
  margin-right: 8px;
`;

export const ImageItem = styled.li`
  position: relative;
  width: 80px;
  height: 80px;

  @media ${device.sm} {
    width: 64px;
    height: 64px;
  }
`;
