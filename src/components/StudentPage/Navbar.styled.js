import styled from 'styled-components';

export const Section = styled.section`
  width: 429px;
  height: 60px;
  //   border: 1px solid #000000;
  border-radius: 0px 56px 56px 0px;

  &:hover {
  }

  &:active {
    background-color: #f9f9f9;
    color: #e3669c;
  }
`;

export const Image = styled.image`
  width: 24px;
  height: 24px;
`;

export const Title = styled.h2`
  //   width: 245px;
  height: 28px;
  padding: 16px 0px 16px 160px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  color: #e3669c;

  &:hover {
    color: #e3669c;
  }

  &:active {
    color: #e3669c;
  }
`;
