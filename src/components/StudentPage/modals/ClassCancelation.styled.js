import styled from 'styled-components';
import { Button } from '../../common/button/Button'

export const Container = styled.div`
  position: absolute;
  max-width: 768px;
  margin: 0 20px;
  padding: 48px 144px;
  border-radius: 20px 0px;
  background: ${props => props.color || props.theme.colors.white};
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 24px;
  font-weight: 500;
  line-height: calc( 33.6 / 24 );
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: calc( 28 / 20 );
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Btn = styled( Button )`
  height: 52px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc( 20 / 20 );
`;
