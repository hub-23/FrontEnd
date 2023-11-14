import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 360px;
    height: 460px;
    top: 2218px;
    display: flex;
    flex-direction: column;
    padding: 10px 0px 0px 10px;
    margin-bottom: 10px;
`;

export const Typography = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.secondary};
    font-size: ${( props ) => props.size || '16px'};
    font-weight: ${( props ) => props.weight || '400'};
    line-height: ${( props ) => props.line || '22px'};
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
    justify: space-between;
`;

export const StyledLocation = styled.div`
    width: 134px;
    height: 22px;
`;

export const StyledContent = styled.div``;

export const StyledInfo = styled.div`
    width: 187px;
    height: 54px;
    margin: 8px 0px 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`;

export const StyledName = styled.div`
    width: 174px;
    height: 28px;
`;

export const StyledSubject = styled.div`
    width: 125px;
    height: 22px;
    padding: 4px 0px 4px 0px;
`;
