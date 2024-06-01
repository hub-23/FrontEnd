import styled from 'styled-components';
import { Button } from 'components/common/button/Button';
import { device } from '../../../utils/device';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding-top: 64px;
  padding-bottom: 64px;
  border-radius: 20px 0;
  background-color: ${props => props.color || props.theme.colors.white};

  @media ${device.md} {
    width: 480px;
    padding: 48px 40px;
    justify-content: space-between;
  }

  @media ${device.sm} {
    position: static;
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 40px 20px 32px 20px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 32px;
  line-height: calc(38 / 32);

  @media ${device.md} {
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: calc(33.6 / 24);
  }

  @media ${device.sm} {
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;

export const CircleWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: ${props => props.color || props.theme.colors.accent};

  @media ${device.md} {
    margin-top: 24px;
    margin-bottom: 32px;

    img {
      // uploaded but not cropped photo
      width: 200px;
      height: 200px;
    }
  }

  @media ${device.sm} {
    margin-top: auto;
    margin-bottom: auto;

    img {
      // uploaded but not cropped photo
      width: 280px;
      height: 280px;
    }
  }

  @media ${device.sm} {
    margin-bottom: auto;
  }

  img {
    // cropped photo
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;

  img {
    // uploaded but not cropped photo
    width: 400px;
    height: 400px;
    object-fit: cover;
  }

  @media ${device.md} {
    margin-top: 20px;
    margin-bottom: 32px;
  }

  @media ${device.sm} {
    margin-top: auto;
    margin-bottom: auto;

    img {
      // uploaded but not cropped photo
      width: 280px;
      height: 280px;
    }
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media ${device.md} {
    flex-direction: column;
    gap: 0;
    width: 400px;
  }

  @media ${device.sm} {
    gap: 20px;
    width: 100%;
  }
`;

export const AddButton = styled.label`
  position: relative;

  button {
    width: 248px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: calc(20 / 20);

    @media ${device.md} {
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      line-height: calc(20 / 20);
    }

    @media ${device.sm} {
      font-size: 16px;
      font-weight: 500;
      line-height: calc(22.4 / 16);
    }
  }
`;

export const CancelBtn = styled.button`
  padding: 14px 32px;
  background-color: transparent;
  border-color: transparent;
  color: ${props => props.color || props.theme.colors.primary};
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 600;
  line-height: calc(20 / 20);

  @media ${device.md} {
    height: 52px;
    padding-top: 24px;
    font-size: 20px;
    font-weight: 600;
    line-height: calc(20 / 20);
  }

  @media ${device.sm} {
    height: 50px;
    padding: 14px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(22.4 / 16);
  }
`;

export const DeleteBtn = styled( CancelBtn )`
  color: ${props => props.color || props.theme.colors.accent};
`;

export const SaveButton = styled( Button )`
  font-size: 20px;
  font-weight: 600;
  line-height: calc(20 / 20);

  @media ${device.md} {
    width: 100%;
  }

  @media ${device.sm} {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(22.4 / 16);
  }
`;
