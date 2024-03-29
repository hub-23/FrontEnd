import styled from 'styled-components';
import { accent, black, white } from '../../../utils/variables.styled';
import { device } from '../../../utils/device';

const gapItem = 20;
const numberItem = 3;
const gapItemMd = 15;
const numberItemMd = 2;

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 120px 160px;

  @media ${device.md} {
    padding: 80px 40px;
  }

  @media ${device.sm} {
    padding: 80px 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-weight: 600;

  font-size: 48px;
  line-height: calc(62.4px / 48px);
  letter-spacing: 0.48px;

  color: ${black};

  @media ${device.xl} {
    /* font-size: 44px; */
  }

  @media ${device.md} {
    font-size: 28px;
    line-height: calc(33px / 28px);
    letter-spacing: 0.26px;
  }

  @media ${device.sm} {
    font-size: 24px;
    line-height: calc(31.2px / 24px);
    letter-spacing: 0.24px;
  }
`;

export const TopLessons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${gapItem}px;
  margin-left: -${gapItem}px;
  margin-bottom: 39px;

  @media ${device.md} {
    margin-top: -${gapItemMd}px;
    margin-left: -${gapItemMd}px;
  }

  @media ${device.sm} {
    display: block;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 18px;
  }

  & li {
    flex-basis: calc(100% / ${numberItem} - ${gapItem}px);
    margin-top: ${gapItem}px;
    margin-left: ${gapItem}px;
    padding: 20px 24px;

    @media ${device.md} {
      flex-basis: calc(100% / ${numberItemMd} - ${gapItemMd}px);
      margin-top: ${gapItemMd}px;
      margin-left: ${gapItemMd}px;
    }

    border-radius: 20px 20px 0px 20px;
    border: 1px solid ${accent};
    background-color: ${white};

    @media ${device.sm} {
      margin-top: 0;
      margin-left: 0;
      padding: 16px 20px;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  & h2 {
    margin-bottom: 4px;
    font-weight: 500;
    letter-spacing: 0.16px;
    font-size: 24px;
    line-height: calc(33.6 / 24);

    color: ${black};

    @media ${device.md} {
      font-size: 18px;
      line-height: calc(23 / 18);
    }

    @media ${device.sm} {
      margin-bottom: 2px;
      font-size: 16px;
      line-height: calc(22.4 / 16);
    }
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & p {
    font-weight: 300;
    font-size: 16px;
    line-height: calc(22.4 / 16);
    letter-spacing: 0.16px;
    color: ${black};

    @media ${device.md} {
      font-size: 14px;
      line-height: calc(17 / 14);
      letter-spacing: 0.14px;
    }

    @media ${device.sm} {
      font-size: 12px;
      line-height: calc(16.8 / 12);
      letter-spacing: 0.12px;
    }
  }
`;

export const SeeMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & p {
    margin-bottom: 4px;
    font-weight: 500;
    letter-spacing: 0.16px;
    font-size: 20px;
    line-height: calc(33.6 / 24);
    color: ${black};

    @media ${device.md} {
      font-size: 18px;
      line-height: calc(26 / 18);
    }

    @media ${device.sm} {
      margin-bottom: 2px;
      font-size: 16px;
      line-height: calc(22.4 / 16);
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  & svg {
    rotate: ${( { $isActive } ) => ( $isActive ? '0deg' : '180deg' )};
  }
`;
