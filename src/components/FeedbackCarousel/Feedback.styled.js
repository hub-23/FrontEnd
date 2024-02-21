import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/device';
import { lightGrey, transition } from '../../utils/variables.styled';

export const Section = styled.section`
  padding-top: 120px;
  padding-bottom: 98px;

  @media ${device.md} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 160px;
  padding-right: 160px;

  @media ${device.md} {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${device.sm} {
    max-width: 480px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 160px;
  padding-right: 160px;

  @media ${device.xxl} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${device.md} {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${device.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding-bottom: 20px;

  @media ${device.xl} {
    max-width: 754px;
    padding-bottom: 0;
  }
  @media screen and (max-width: 834px) {
    max-width: 390px;
    padding-bottom: 0;
  }
  @media ${device.sm} {
    max-width: 340px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 44px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.48px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.md} {
    margin-bottom: 32px;
    font-size: 32px;
  }
  @media ${device.sm} {
    margin-bottom: 24px;
    font-size: 24px;
    letter-spacing: 0.24px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 24px 24px 24px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.color || props.theme.colors.primary};
  border-radius: 0px 20px;
  background-color: ${props => props.color || lightGrey};

  @media ${device.md} {
    max-width: 367px;
  }
  @media ${device.sm} {
    max-width: 320px;
    max-height: 218px;
    padding: 20px;
  }
`;

export const StudentName = styled.h4`
  margin-bottom: 4px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.2px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.sm} {
    font-size: 16px;
    letter-spacing: 0.16px;
  }
`;

export const Photo = styled.img`
  position: absolute;
  top: -40px;
  right: 80px;
  width: 100%;
  height: 100vw;
  max-width: 80px;
  max-height: 80px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${props => props.color || props.theme.colors.primary};

  @media ${device.sm} {
    right: 40px;
  }
`;

export const StarList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const StarItem = styled.li`
  height: '16px';
`;

export const TeacherNameWrapper = styled( Link )`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  align-items: center;
  cursor: pointer;
  transition: fill ${transition};

  svg.default {
    fill: ${props => props.color || props.theme.colors.primary};
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
      fill: ${props => props.color || props.theme.colors.primary};
    }
    p {
      text-decoration: underline;
    }
  }
`;

export const TeacherName = styled.p`
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.16px;
  color: ${props => props.color || props.theme.colors.primary};

  @media ${device.sm} {
    font-size: 14px;
    letter-spacing: 0.14px;
  }
`;

export const Feedback = styled.p`
  height: 64px;
  margin-bottom: 8px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 16px;
  line-height: 1.35;
  color: ${props => props.color || props.theme.colors.black};

  ${props =>
    props.$overflow
    && css`
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `};

  @media ${device.sm} {
    height: 58px;
    font-size: 14px;
    line-height: 1.37;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.span`
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.16px;
  color: ${props => props.color || props.theme.colors.black};

  @media ${device.sm} {
    font-size: 12px;
  }
`;

export const Detailed = styled( Link )`
  cursor: pointer;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.16px;
  color: ${props => props.color || props.theme.colors.primary};
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
  @media ${device.sm} {
    font-size: 14px;
    letter-spacing: 0.14px;
  }
`;

export const ControlBtns = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const ControlBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background-color: transparent;
  border: none;

  fill: ${props => props.color || props.theme.colors.white};
  stroke: ${props => props.color || props.theme.colors.primary};
  transition: fill ${transition}, stroke ${transition};
  &:hover,
  &:focus,
  &:active {
    transition: fill ${transition}, stroke ${transition};
    fill: ${props => props.color || props.theme.colors.primary};
    & path {
      fill: ${props => props.color || props.theme.colors.white};
      stroke: ${props => props.color || props.theme.colors.white};
    }
  }
  path {
    fill: ${props => props.color || props.theme.colors.primary};
  }
`;
