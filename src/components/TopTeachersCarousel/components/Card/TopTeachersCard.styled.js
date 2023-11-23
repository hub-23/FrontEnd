import styled from 'styled-components';

export const StyledCard = styled.div`
    max-width: 360px;
    width: 100%;
    max-height: 460px;
    height: 100%;
    top: 2218px;
    margin: 170px 8px 66px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 12px;
    overflow: hidden;
`;

export const Typography = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.secondary};
    font-size: ${( props ) => props.size || '16px'};
    font-weight: ${( props ) => props.weight || '400'};
    line-height: ${( props ) => props.height || '22px'};
    text-align: left;
    letter-spacing: 0.01em;
    color: #ffffff;
    white-space: nowrap;
`;

export const StyledPhoto = styled.div`
    height: 100%;
    overflow: hidden;
`;

export const Photo = styled.img`
    max-width: 360px;
    max-height: 360px;
    object-fit: cover;
    padding: 0px 5px 0px;
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 100vw;
    border-radius: 0px 20px 0px 20px;
`;

export const StyledRating = styled.div`
    max-width: 360px;
    height: 22px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledLocation = styled.div`
    width: 134px;
    height: 22px;
`;

export const StyledContent = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
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
