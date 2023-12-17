import styled from 'styled-components';
import searchImg from '../../assets/home/search.svg';
import locationImg from '../../assets/home/location.svg';
import { device } from '../../styles/device';

export const StyledInputs = styled.div`
    max-width: 1120px;
    height: 80px;
    border-radius: 20px 0px;
    border: 1px solid #d5d5d5;
    display: flex;
    overflow: hidden;
    background: #ffffff;
    // backdrop-filter: blur(4px);

    @media ${device.lg} {
        width: 320px;
        height: 270px;
        flex-direction: column;
        padding: 25px 20px 0px;
    }

    @media ${device.sm} {
        max-width: 290px;
    }

    // padding-top: 68px;
    // padding-top: 132;
    // width: 280px;
    // height: 0px;
    // stroke-width: 1px;
    // color: #D5D5D5;
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

    // @media ${device.lg} {
    //     .input {
    //         &::before {
    //             content: '';
    //             width: 280px;
    //             height: 1px;
    //             background-color: #d5d5d5;
    //         }
    //     }
    // }
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
        color: #ffffff;
        background: #2d2d2d;
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

export const StyledText = styled.p`
    @media ${device.lg} {
        display: inline-block;
    }
`;

// color: #797979;
// font-family: Nunito;
// font-size: 20px;
// font-style: normal;
// font-weight: 400;
// line-height: 140%;
// letter-spacing: 0.2px;
// 202*28(24*34,5ж12ж202*28)

// mob:
// font-size: 16px;
// letter-spacing: 0.16px;
// 162*22

// color: #797979;
// font-family: Nunito;
// font-size: 20px;
// font-style: normal;
// font-weight: 400;
// line-height: 140%;
// letter-spacing: 0.2px;
// 109*56(24*24ж12ж53*28)

// mob:
// font-size: 16px;
// letter-spacing: 0.16px;
// 42*22

// color: #2D2D2D;
// font-family: Nunito;
// font-size: 20px;
// font-style: normal;
// font-weight: 400;
// line-height: 140%;
// letter-spacing: 0.2px;
// 130*56(24*24ж12ж74*28)

// mob:
// font-size: 16px;
// letter-spacing: 0.16px;
// 60*22

// button

// width: 134px;
// height: 48px;
// margin-top: 16px;
// margin-bottom: 16px;
// margin-right: 32px;
// border-radius: 20px 0px;
// background: #2D2D2D;
// 70*20
// color: #FFF;
// font-family: Nunito;
// font-size: 20px;
// font-style: normal;
// font-weight: 600;
// line-height: 100%;
// letter-spacing: 0.2px;

// button mob:

// width: 280px;
// height: 50px;
// padding: 14px 32px;
// justify-content: center;
// align-items: center;
// gap: 10px;
// 56*22
// color: #ffffff;

// mob:
// font-family: Nunito;
// font-size: 16px;
// font-style: normal;
// font-weight: 500;
// line-height: 140%;
// letter-spacing: 0.16px;
// backdrop-filter: blur(2px);

// modal:
// margin-bottom: 25px;
