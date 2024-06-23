import styled from 'styled-components';
import { Container } from 'utils/common.styled';
// import { Contain } from 'utils/common.styled';
import { grayStroke } from 'utils/variables.styled';

// export const ContainerPage = styled( Contain )`
//   display: flex;
//   padding: 144px 160px 80px 0px;
// `;

export const ContainerPage = styled( Container )`
  display: flex;
  padding: 144px 160px 80px 0px;
`;

export const Navbar = styled.ul`
  min-width: 482px;
  padding-right: 53px;
`;

export const Content = styled.section`
  flex-grow: 1;
  padding-left: 16px;

  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${grayStroke};
`;
