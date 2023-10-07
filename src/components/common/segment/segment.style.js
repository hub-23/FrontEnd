import styled from 'styled-components';

export const StyledSegment = styled.div` 
display: flex;
flex-direction: column;
align-items: start;
justify-content:center;
width: ${(props) => props.width || '69%'};;
`;

export default StyledSegment;
