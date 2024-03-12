import styled from 'styled-components';
import { device } from '../../../utils/device';
import { white, black, primary } from 'utils/variables.styled';

export const StyledSection = styled.section`
  min-width: 100%;
  max-height: 400px;
  min-height: 100%;
  overflow: hidden;
  color: ${white};

  @media ${device.sm} {
    min-width: 100%;
    max-height: 555px;
    min-height: 100%;
  }
`;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

export const StyledContent = styled.div`
  margin-top: 80px;
  //   margin-bottom: 20px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;

  @media ${device.lg} {
    // margin-top: 48px;
  }

  @media ${device.sm} {
    // margin-top: 28px;
    margin-bottom: 14px;
  }
`;

export const StyledTitle = styled.div`
  max-width: 364px;
  height: 62px;
  padding-left: 160px;

  @media ${device.lg} {
    max-width: 300px;
    height: 46px;
  }

  @media ${device.md} {
    padding-left: 40px;
  }
  40 @media ${device.sm} {
    max-width: 200px;
    height: 31px;
    padding-left: 20px;
  }
`;

export const StyledTitleTypography = styled.h2`
  color: ${black};
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.48px;
  white-space: nowrap;

  @media ${device.lg} {
    // font-size: 40px;
    // line-height: 50px;
  }

  @media ${device.md} {
    font-size: 32px;
    letter-spacing: 0.26px;
  }

  @media ${device.sm} {
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.24px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${white};
  color: ${primary};
`;
