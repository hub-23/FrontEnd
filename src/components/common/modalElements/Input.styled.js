import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../utils/device';
import {
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  transition,
} from '../../../utils/variables.styled';

export const InputContainer = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled( Field )`
  width: 100%;
  height: ${( { $xlInputHeight } ) => $xlInputHeight || '60px'};
  padding: ${( { $xlInputPadding } ) => $xlInputPadding || '16px 32px'};

  font-size: ${( { $xlInputFontSize } ) => $xlInputFontSize || '20px'};
  line-height: ${( { $xlInputLineHeight, $xlInputFontSize } ) =>
    `calc(${$xlInputLineHeight} / ${$xlInputFontSize})` || 'calc(28 / 20)'};
  letter-spacing: 0.2px;

  border-width: 1px;
  border-style: solid;
  border-radius: ${( { $inputBorderRadius } ) =>
    $inputBorderRadius || '16px 0px'};

  background-color: ${props => props.color || props.theme.colors.white};
  caret-color: ${props =>
    props.$error ? props.theme.colors.accent : props.theme.colors.black};
  transition: caret-color ${transition}, border-color ${transition};
  cursor: ${( { $dropdown } ) => $dropdown && 'pointer'};

  @media ${device.sm} {
    height: ${( { $smInputHeight } ) => $smInputHeight || '48px'};
    padding: ${( { $smInputPadding } ) => $smInputPadding || '13px 24px'};

    font-size: ${( { $smInputFontSize } ) => $smInputFontSize || '16px'};
    line-height: ${( { $smInputLineHeight, $smInputFontSize } ) =>
      `calc(${$smInputLineHeight} / ${$smInputFontSize})` || 'calc(22.4 / 16)'};
    letter-spacing: 0.16px;
  }

  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown {
    border-color: ${( { $error } ) => ( $error ? borderError : grayStroke )};
  }
  &:not(:placeholder-shown) {
    border-color: ${( { $error, $value } ) =>
      $value
        ? $error
          ? borderError
          : borderGreen
        : $error
        ? borderError
        : grayStroke};
  }
  &:not(:placeholder-shown) + label {
    display: none;
  }
  &:focus {
    outline: none;
    border-color: ${props =>
      props.$error ? props.theme.colors.accent : borderBlue};
  }
  &:focus + label {
    display: ${( { $topic, $value } ) =>
      $topic ? ( $value ? 'none' : 'block' ) : 'none'};
  }
`;

export const Label = styled.label`
  position: absolute;
  left: ${( { $xlLabelLeft } ) => $xlLabelLeft || '32px'};
  top: ${( { $xlLabelTop } ) => $xlLabelTop || '50%'};
  transform: ${( { $labelTransform } ) =>
    $labelTransform ? `translateY(${$labelTransform})` : 'translateY(-50%)'};
  color: ${grayText};
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: ${( { $xlLabelFontSize } ) => $xlLabelFontSize || '20px'};
  line-height: ${( { $LabelLineHeight, $LabelFontSize } ) =>
    `calc(${$LabelLineHeight} / ${$LabelFontSize})` || 'calc(28 / 20)'};
  letter-spacing: 0.2px;

  @media ${device.sm} {
    left: ${( { $smLabelLeft } ) => $smLabelLeft || '24px'};
    font-size: ${( { $smLabelFontSize } ) => $smLabelFontSize || '16px'};
    letter-spacing: 0%;
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: ${( { $iconTop } ) => $iconTop || '-4px'};
`;

export const DropdownBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: transparent;
  padding-right: 23px;
  border: none;
  border-radius: 16px 0px;
  fill: ${props => props.color || props.theme.colors.black};
  -webkit-transition: rotate ${transition};
  transition: rotate ${transition};
  > div {
    width: fit-content;
    transform: ${props => ( props.$rotate ? 'rotate(180deg)' : '' )};
  }
`;
