import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.25rem;
margin-bottom:30px;
width:100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0 0 0 / 60%);
  overflow: auto;`;

export const Modal = styled.div`
  margin-top: 75px;
  padding: 50px;
  border-radius: 0.28rem;
  background: #fff;
  width: 100%;
  border-radius: 20px 0px 20px 0px;
  max-width:1120px;
`;
