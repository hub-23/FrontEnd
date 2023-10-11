import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
flex-direction :${( props ) => props.direction || 'row'};
align-items:  ${( props ) => props.align || 'center'};
justify-content:${( props ) => props.justify || 'space-between'};
gap: ${( props ) => props.gap || '1.25rem'};
margin-bottom:30px;
width:${( props ) => props.width || '100%'};
max-width:${( props ) => props.maxwidth || '100%'};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0 0 0 / 60%);
  overflow: auto;`;

export const Modal = styled.div`
  margin-top: 75px;
  padding: 50px;
  border-radius: 0.28rem;
  background: #fff;
  width: 100%;
  border-radius: 20px 0px 20px 0px;
  max-width:1120px;
`;

export const GoogleRegistration = styled.div`
  margin-top:40px;
  & p {
  margin-top: 20px;
  }
  & span {
  margin-top: 20px;
  }

  & button {
    margin-top: 40px;
  }
`;

export const Typography = styled.p`
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.secondary};
  font-size: ${( props ) => props.size || '14px'};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #151414;
  max-width:93%;
  text-align: start;
  margin: 0 auto;
& a {
  color: #151414;
  text-decoration: underline;
};

& span {
  display: block;
  font-family: 'Nunito';
font-size: 20px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #000000;
}
`;
