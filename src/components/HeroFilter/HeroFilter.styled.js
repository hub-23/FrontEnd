import styled from 'styled-components';
import searchImg from '../../assets/home/search.svg';
import locationImg from '../../assets/home/location.svg';
import { device } from '../../styles/device';

export const StyledForm = styled.form`
    @media screen and (max-width: 360px) {
        display: ${( props ) => ( props.$heroFilterShown === true ? 'block' : 'none' )};
    }
`;

export const StyledInputs = styled.div`
    max-width: 1120px;
    height: 80px;
    border-radius: 20px 0px;
    border: 1px solid #d5d5d5;
    display: flex;
    overflow: hidden;
    background: #ffffff;

    @media ${device.lg} {
        width: 700px;
        height: 306px;
        flex-direction: column;
        padding: 25px 40px 0px;
    }

    @media ${device.md} {
        width: 320px;
        height: 270px;
    }

    @media ${device.sm} {
        max-width: 290px;
        height: 270px;
        flex-direction: column;
        padding: 25px 20px 0px;
    }
`;

export const StyledInput = styled.input`
    all: unset;
    flex-grow: 1;
    background-image: ${( props ) => {
    if ( props.id === 'subject' ) {
      return `url(${searchImg})`;
    } else if ( props.id === 'city' ) {
      return `url(${locationImg})`;
    }
  }};
    background-repeat: no-repeat;
    background-position: 16px center;
    border-right: 1px solid black;
    padding-left: 56px;

    color: #797979;
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;

    &.input-subject {
        @media ${device.xl} {
            width: 205px;
        }
    }

    &.input-city {
        @media ${device.xl} {
            width: 109px;
        }
    }

    @media ${device.lg} {
        border-right: none;
    }

    @media ${device.sm} {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 1;
    cursor: pointer;
    font-size: 16px;

    @media ${device.lg} {
        flex-direction: column;
    }

    .filter-button {
        width: 134px;
        height: 48px;
        margin-top: 16px;
        margin-bottom: 16px;
        margin-right: 32px;
        color: #ffffff;
        background: #2d2d2d;
        font-family: Nunito;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: 0.2px;

        @media ${device.xl} {
            width: 109px;
            margin-right: 16px;
        }

        @media ${device.lg} {
            width: 280px;
        }

        @media ${device.md} {
            width: 280px;
            height: 50px;
            font-size: 16px;
            font-weight: 500;
            line-height: 140%;
            letter-spacing: 0.16px;
        }

        @media ${device.md} {
            width: 260px;
            margin-left: 10px;
        }
    }
`;

export const StyledCheckboxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;

    @media ${device.lg} {
        align-self: flex-start;
        flex-direction: row;
        padding-left: 20px;
    }
`;

export const StyledCheckbox = styled.input`
    position: relative;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid #e3669c;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    padding-left: 20px;

    &:checked {
        &::before {
            content: '';
            width: 12px;
            height: 12px;
            background-color: #e3669c;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export const StyledStroke = styled.div`
    @media ${device.lg} {
        background-color: #d5d5d5;
        max-width: 714px;
        height: 1px;
    }

    @media ${device.md} {
        width: 270px;
    }

    @media ${device.sm} {
        width: 250px;
    }
`;

export const StyledText = styled.p`
    @media ${device.lg} {
        display: inline-block;
    }
`;
