import styled from 'styled-components';
import { Button } from '../../common/button/Button'
import { device } from '../../../utils/device';

export const Container = styled.div`
  position: absolute;
  max-width: 768px;
  margin: 0 20px;
  padding: 48px 144px;
  border-radius: 20px 0px;
  background: ${props => props.color || props.theme.colors.white};

  @media ${device.sm} {
    position: static;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 40px 20px 32px 20px;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 24px;
  font-weight: 500;
  line-height: calc( 33.6 / 24 );

  @media ${device.sm} {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: calc( 28 / 20 );
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: calc( 28 / 20 );

  @media ${device.sm} {
    margin-bottom: 0;
    font-size: 16px;
    line-height: calc( 22.4 / 16 );
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.sm} {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
`;

export const Btn = styled( Button )`
  height: 52px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc( 20 / 20 );

  @media ${device.sm} {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(22.4 / 16);
  }
`;
