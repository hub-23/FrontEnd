import styled from 'styled-components';
import { device } from 'utils/device';
import {
  white,
  gray,
  accent,
  primary,
  bgColorGradientNotactiveBtn,
  bgColorGradientBtnActive,
} from 'utils/variables.styled';

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
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: row;
    align-items: center;
  }

  .circle {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.color || props.theme.colors.accent};

    @media ${device.md} {
      width: 96px;
      height: 96px;
    }

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

    @media ${device.sm} {
      font-size: 14px;
      line-height: calc(22.4 / 14);
    }

    @media (max-width: 375px) {
      font-size: 12px;
      line-height: calc(22.4 / 12);
    }
  }

  span {
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    line-height: calc(19.6 / 14);

    @media ${device.sm} {
      display: block;
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
    right: 6px;
    bottom: 6px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    border-radius: 50%;
    background-color: #f9f9f9;

    @media ${device.sm} {
      right: 0;
      bottom: 0;
    }

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

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 12px;

  @media ${device.sm} {
    margin-top: 0;
    gap: 8px;
  }

  div {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 36px;
    background-color: rgba(249, 249, 249, 1);
    fill: none;
    stroke: #2d2d2d;

    p {
      margin-left: 2px;
    }
  }
  > p {
    padding: 8px 24px;
    border-radius: 36px;
    background-color: rgba(249, 249, 249, 1);
    color: ${props => ( props.isActive ? accent : primary )};
  }
`;

export const StarList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const StarItem = styled.li`
  width: 17px;
  height: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.sm} {
    flex-direction: column;
  }

  button {
    width: 50%;
    height: auto;
    padding-block: 14px;
    border: none;
    color: ${white};
    font-size: 20px;
    font-weight: 600;

    &:first-child {
      background: ${props =>
        props.children[ 0 ].props.isActive ? bgColorGradientBtnActive : gray};
    }

    &:last-child {
      background: ${props =>
        props.children[ 1 ].props.isActive ? bgColorGradientNotactiveBtn : gray};
    }

    @media ${device.sm} {
      font-size: 16px;
      font-weight: 500;
      width: 100%;
    }
  }
`;

export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0;
  background-color: ${props => props.color || props.theme.colors.accent};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0px;
  }
  > div {
    position: relative;
    width: 580px;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0;
    background-color: ${props => props.color || props.theme.colors.accent};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px 0px;
    }
  }

  button {
    position: absolute;
    left: calc(50% - 12px);
    bottom: -12px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    border-radius: 50%;
    background-color: #f9f9f9;

    @media ${device.sm} {
      left: calc(50% - 16px);
      bottom: -16px;
      width: 32px;
      height: 32px;
    }

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
