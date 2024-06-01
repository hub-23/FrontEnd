import styled from 'styled-components';
import { device } from 'utils/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  gap: 32px;
  margin-bottom: 40px;

  @media ${device.md} {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  .circle {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.color || props.theme.colors.accent};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .text p:nth-child(1) {
    margin-bottom: 8px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    line-height: calc(28 / 20);

    @media ${device.sm} {
      font-size: 16px;
      line-height: calc(22.4 / 16);
    }

    @media (max-width: 375px) {
      font-size: 12px;
      line-height: calc(22.4 / 12);
    }
  }
  .text p:nth-child(2) {
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    line-height: calc(19.6 / 14);

    @media ${device.sm} {
      font-size: 12px;
      line-height: calc(16.8 / 12);
    }

    @media (max-width: 375px) {
      font-size: 10px;
      line-height: calc(16.8 / 10);
    }
  }

  button {
    position: absolute;
    right: 0%;
    bottom: 0;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    border-radius: 50%;
    background-color: #f9f9f9;

    svg {
      fill: none;
    }
    svg.active {
      display: none;
    }
    &:hover,
    &:focus,
    &:active {
      svg.default {
        display: none;
      }
      svg.active {
        display: block;
      }
    }
  }
`;
