import styled from 'styled-components';
import { device } from 'utils/device';
import { white } from 'utils/variables.styled';

export const Modal = styled.div`
  position: relative;

  max-width: 720px;
  margin: 0 20px;
  padding: 40px 190px 40px 50px;

  max-height: calc(100vh - 40px);

  overflow-y: auto;
  scroll-behavior: smooth;

  border-radius: 20px 0px;
  background-color: ${white};

  @media ${device.md} {
    max-height: calc(100vh - 50px);
    padding: 50px;
  }

  @media ${device.sm} {
    margin: 0 15px;
    padding: 40px 23px;
    /* max-height: calc(100vh - 40px); */
  }
`;

export const Article = styled.article`
  margin: 0 auto;
  max-width: 480px;

  @media ${device.md} {
    max-width: 419px;

    & > :last-child {
      text-align: center;
    }
  }

  @media ${device.sm} {
    max-width: initial;
  }
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  text-align: center;

  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.16px;

  color: ${props => props.color || props.theme.colors.black};

  @media ${device.sm} {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.2px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.sm} {
    font-size: 16px;
  }
`;
