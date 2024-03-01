import styled from 'styled-components';
import { device } from '../../../utils/device';

export const Section = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  @media ${device.md} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 160px;
  padding-right: 160px;

  @media ${device.md} {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${device.sm} {
    max-width: 480px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.24px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.md} {
    margin-bottom: 32px;
    font-size: 32px;
  }
  @media ${device.sm} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  margin-bottom: 46px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.16px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.md} {
    margin-bottom: 20;
  }
  @media ${device.sm} {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: '700px';
  width: '1030px';
  overflow: 'hidden';

  @media ${device.md} {
    height: '400px';
    width: '550px';
  }
  @media ${device.sm} {
    display: none;
  }
`;
