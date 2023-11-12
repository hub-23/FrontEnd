import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: Hug (360px);
    height: Hug (460px);
    top: 2218px;
    gap: 10px;
    // padding: 10px 0px 0px 10px;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'space-between'};
    gap: ${(props) => props.gap || '1.25rem'};
    width: ${(props) => props.width || '100%'};
    max-width: ${(props) => props.maxwidth || '100%'};
`;

export const StyledPhoto = styled.img`
    width: 360px
    height: 360px
    border-radius: 0px, 20px, 0px, 20px
`;

// display: flex;
// margin: 0 auto;
// height: 40vh;
// width: 80%;

export const StyledRatingContainer = styled.div`
    width: 360px;
    height: 22px;
    display: flex;
    justify: space-between;
`;

export const StyledLocation = styled.div`
    width: 134px;
    height: 22px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;
    background: #ffffff;
`;

export const StyledInfo = styled.div``;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 187px;
    height: 54px;
    gap: 4px;
`;

export const StyledName = styled.div`
    width: 174px;
    height: 28px;
    font-family: Nunito;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.01em;
    text-align: left;
    background: #ffffff;
`;

export const StyledSubject = styled.div`
    width: 125px;
    height: 22px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;
    background: #ffffff;
`;
