import styled from 'styled-components';
import { Container } from 'utils/common.styled';
import { grayStroke } from 'utils/variables.styled';

export const ContainerPage = styled( Container )`
  padding: 144px 160px 80px 0px;
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.section`
  /* width: 72%; */
  padding-left: 16px;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${grayStroke};
`;
