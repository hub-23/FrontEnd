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
    width: 120px;
    height: 120px;
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

  div {
    display: flex;
    align-items: center;
    padding: 8px 16px ;
    border-radius: 36px;
    background-color: rgba(249, 249, 249, 1) ;

    p {
      margin-left: 2px;
    }
  }
  > p {
    padding: 8px 16px ;
    border-radius: 36px;
    background-color: rgba(249, 249, 249, 1) ;
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

  button {
    width: 50%;
    height: auto;
    padding-block: 14px;
    border: none;
  }
`;

export const BannerWrapper = styled.div`
  position: relative;

  > div {
    position: relative;
    width: 580px;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px 0;
    background-color: ${props => props.color || props.theme.colors.accent};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* border-radius: 50%; */
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
