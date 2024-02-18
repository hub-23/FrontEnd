import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/device';
import { accent, transitionB } from '../../utils/variables.styled';
const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ErrorText = styled.p`
    position: absolute;
    margin-left: ${( { $marginLeft } ) => $marginLeft || '19px'};

    line-height: (15.82 / 14);

    color: ${accent};
    animation: ${show} ${transitionB};

    @media ${device.sm} {
      position: static;
    }
`;
