import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  width: 356px;
  height: 60px;

  border: 1px solid rgba(45, 45, 45, 1);
  border-radius: 20px 0px 20px 0px;
  font-family: 'Nunito', sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-align: center;
  background: ${( props ) =>
    props.bg === 'black' ? 'rgba(255, 255, 255, 1)' : 'rgba(45, 45, 45, 1)'};
  color: ${( props ) =>
     props.bg === 'black' ? 'rgba(45, 45, 45, 1)' : 'rgba(255, 255, 255, 1)'};
`;


const Button = ( { children, type = 'button', bg } ) => {
  return <CustomButton type={ type } bg={ bg }>{children}</CustomButton>;
};

export default Button;
