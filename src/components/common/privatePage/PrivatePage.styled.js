import styled from 'styled-components';
import { Container } from 'utils/common.styled';
import { device } from 'utils/device';
// import { Contain } from 'utils/common.styled';
import { grayStroke } from 'utils/variables.styled';

// export const ContainerPage = styled( Contain )`
//   display: flex;
//   padding: 144px 160px 80px 0px;
// `;

export const ContainerPage = styled( Container )`
  display: flex;
  padding: 144px 160px 80px 0px;

  @media ${device.xl} {
    flex-direction: column;
    align-items: center;
    padding: 132px 40px 60px;
  }

  @media ${device.md} {
    width: 100%;
    padding: 80px 20px;
  }
`;

export const Navbar = styled.ul`
  min-width: 482px;
  padding-right: 53px;

  @media ${device.xxl} {
    min-width: 439px;
  }

  @media ${device.xl} {
    width: 100%;
    padding-right: 0px;
    padding-bottom: 1px;

    display: flex;
    gap: 24px;

    border-bottom: 1px solid ${grayStroke};
  }

  @media ${device.md} {
    min-width: auto;
    gap: 16px;
    border: none;
  }
`;

export const Content = styled.section`
  flex-grow: 1;
  padding-left: 16px;

  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${grayStroke};

  @media ${device.xl} {
    border: none;

    padding-left: 0px;
    padding-top: 32px;
  }

  @media ${device.md} {
    width: 100%;
    padding: 24px 0px 0;
  }
`;
