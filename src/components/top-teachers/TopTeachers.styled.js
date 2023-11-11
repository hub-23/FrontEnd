import styled from 'styled-components';

export const StyledSection = styled.section`
    width: 1440px;
    height: 720px;
    top: 2036px;
    background: #113268;
    border: mixed solid;
    color: #ffffff;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'space-between'};
    gap: ${(props) => props.gap || '1.25rem'};
    margin-bottom: 30px;
    width: ${(props) => props.width || '100%'};
    max-width: ${(props) => props.maxwidth || '100%'};
`;

export const StyledTitle = styled.div`
    width: 399px;
    height: 62px;
    top: 2116px;
    left: 160px;
`;

export const StyledTitleTypography = styled.h2`
    stylename: Headline/H2;
    font-family: Nunito;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #ffffff;
`;

export const StyledBtnContainer = styled.div``;

// export const Item = styled.div`
//     width: Hug (360px);
//     height: Hug (460px);
//     top: 2218px;
//     left: 4200px;
//     gap: 10px;
// `;
// // display: inline-flex;
// // align-items: flex-start;
// // gap: 10px;

// export const Item1 = styled.div`
//     width: Hug (360px);
//     height: Hug (460px);
//     gap: 12px;
// `;

// export const Item12 = styled.div`
//     width: Hug (360px);
//     height: Hug (460px);
//     top: 2218px;
//     left: 20px;
//     gap: 10px;
// `;

// export const Info1 = styled.div`
//     width: Fixed (360px);
//     height: Hug (22px);
//     justify: space-between;
//     & star-area {
//         width: Fixed (137px);
//         height: Fixed (20px);
//         gap: 8px;
//     }
//     & star {
//         width: 21px;
//         height: 20px;
//         background: #fecc01;
//     }
//     & city {
//         width: 59px;
//         height: 22px;
//         stylename: Body/B5;
//         font-family: Nunito;
//         font-size: 16px;
//         font-weight: 300;
//         line-height: 22px;
//         letter-spacing: 0.01em;
//         text-align: left;
//         background: #ffffff;
//     }
// `;

// export const Info2 = styled.div`
//     width: Hug (187px);
//     height: Hug (54px);
//     gap: 4px;
//     & name {
//         width: 187px;
//         height: 28px;
//         stylename: Body/B1;
//         font-family: Nunito;
//         font-size: 20px;
//         font-weight: 400;
//         line-height: 28px;
//         letter-spacing: 0.01em;
//         text-align: left;
//         background: #ffffff;
//     }
//     & subject {
//         width: 115px;
//         height: 22px;
//         stylename: Body/B4;
//         font-family: Nunito;
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 22px;
//         letter-spacing: 0.01em;
//         text-align: left;
//         background: #ffffff;
//     }
// `;
