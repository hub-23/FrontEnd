import styled from 'styled-components';
import { bgModal } from '../../utils/variables.styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${bgModal};
  z-index: 1200;
`;
