import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 360px;
    height: 460px;
    // top: 2218px;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    margin-left: 12px;
`;

export const Typography = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.secondary};
    font-size: ${( props ) => props.size || '16px'};
    font-weight: ${( props ) => props.weight || '400'};
    line-height: ${( props ) => props.height || '22px'};
    text-align: left;
    letter-spacing: 0.01em;
    color: #ffffff;
`;

export const StyledPhoto = styled.div`
    display: flex;
    margin: 0 auto;
`;

export const Photo = styled.img`
    width: 360px;
    height: 360px;
    border-radius: 0px, 20px, 0px, 20px;
`;

export const StyledRating = styled.div`
    width: 360px;
    height: 22px;
    display: flex;
    justify-content: space-between;
`;

export const StyledLocation = styled.div`
    width: 134px;
    height: 22px;
`;

export const StyledContent = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
`;

export const StyledInfo = styled.div`
    width: 187px;
    height: 54px;
    padding: 8px 0px 0px 8px;
`;

export const StyledNameBox = styled.div`
    width: 174px;
    height: 28px;
`;

export const StyledSubject = styled.div`
    width: 125px;
    height: 22px;
`;
