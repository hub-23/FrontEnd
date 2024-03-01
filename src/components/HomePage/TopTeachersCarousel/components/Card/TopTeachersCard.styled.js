import styled from 'styled-components';
import { device } from '../../../../../utils/device';

export const StyledCard = styled.div`
  max-width: 360px;
  height: 460px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 10px 66px;

  @media ${device.lg} {
    margin: 32px 10px;
  }

  @media ${device.sm} {
    max-width: 240px;
    height: 314px;
  }
`;

export const StyledHoverCard = styled.div`
  width: 209px;
  height: 28px;
  display: none;
  position: absolute;
  width: 100%;
  top: 40%;
  left: 5%;
  z-index: 10;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #113268;
  white-space: nowrap;

  @media ${device.xxxl} {
    position: absolute;
    left: 15%;
    top: 40%;
  }

  .btn {
    @media ${device.lg} {
      max-width: 209px;
    }
  }
`;

export const StyledPhoto = styled.div`
    max-width: 360px;
    height: 100%;
    position: relative;

    &:hover {
        ${StyledHoverCard} {
            display: block;
        },   
    },
`;

export const Photo = styled.img`
  width: 100%;
  height: 100vw;
  max-width: 360px;
  max-height: 360px;
  object-fit: cover;
  border-radius: 0px 20px 0px 20px;

  &:hover {
    background-color: transparent;
    opacity: 0.6;
  }

  @media ${device.sm} {
    max-width: 240px;
    height: 240px;
  }
`;

export const StyledRating = styled.div`
  max-width: 360px;
  width: 100%;
  height: 22px;
  margin: 12px 0px;
  display: flex;
  justify-content: space-between;

  @media ${device.sm} {
    max-width: 240px;
    height: 17px;
    margin: 8px 0px;
  }
`;

export const StyledLocation = styled.div`
  max-width: 134px;
  height: 22px;
  display: inline-block;

  @media ${device.sm} {
    max-width: 100px;
    height: 17px;
  }
`;

export const TypographyLocation = styled.div`
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  line-height: 140%;
  letter-spacing: 0.16px;
  color: #ffffff;
  white-space: nowrap;

  @media ${device.sm} {
    font-size: 12px;
    letter-spacing: 0.12px;
  }
`;

export const StyledContent = styled.div`
  max-height: 100px;
  display: flex;
  flex-direction: column;
`;

export const StyledInfo = styled.div`
  max-width: 187px;
  height: 54px;
  padding: 8px 0px 0px 8px;

  @media ${device.sm} {
    max-width: 139px;
    height: 41px;
  }
`;

export const StyledNameBox = styled.div`
  max-width: 174px;
  height: 28px;

  @media ${device.sm} {
    max-width: 139px;
    height: 22px;
  }
`;

export const TypographyName = styled.div`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 140%;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  @media ${device.sm} {
    font-size: 16px;
    letter-spacing: 0.16px;
  }
`;

export const StyledSubject = styled.div`
  max-width: 125px;
  height: 22px;

  @media ${device.sm} {
    max-width: 95px;
    height: 17px;
  }
`;
export const TypographySubject = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  @media ${device.sm} {
    font-size: 12px;
    letter-spacing: 0.12px;
  }
`;
