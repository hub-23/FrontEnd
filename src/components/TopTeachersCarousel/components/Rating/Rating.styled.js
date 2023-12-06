import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const StyledRating = styled.div`
    width: 137px;
    height: 20px;
    display: flex;
    @media ${device.sm} {
        width: 117px;
        height: 16px;
    }
`;

export const StyledStar = styled.div`
    margin: 1px 4px;
`;

export const StarImage = styled.img`
    width: 21px;
    height: 20px;
    @media ${device.sm} {
        width: 17px;
        height: 16px;
    }
`;
