import styled from 'styled-components';

export const StyledTopTeachersButton = styled.button`
    border: 1px solid black;
    border-radius: 20px 0 20px 0;
    padding: 16px 40px;
    /* background: ${(props) =>
        props.color === 'second'
            ? 'linear-gradient(88deg, #B92759 0%, #E3669C 100%)'
            : 'linear-gradient(88deg, #09194d 0%, #234890 100%)'}; */
    background: ${(props) => {
        if (props.color === 'blue') {
            return 'linear-gradient(88deg, #09194d 0%, #234890 100%)';
        } else if (props.color === 'crimson') {
            return 'linear-gradient(88deg, #B92759 0%, #E3669C 100%)';
        } else if (props.color === 'black') {
            return '#2D2D2D';
        }
    }};
    width: ${(props) => (props.size === 'big' ? '295px' : '')};
`;
