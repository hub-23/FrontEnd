import styled from 'styled-components';
import { black, grayStroke, white } from '../../utils/variables.styled';
import { device } from '../../styles/device';

export const PhoneCode = styled.div`
    /* background-color: brown; */
    position: absolute;
    top: ${( { $xlPositionTopList } ) => $xlPositionTopList || '0'}; //
    left: ${( { $xlPositionLeftList } ) => $xlPositionLeftList};
    width: ${( { $isShow, $xlPositionLeftList } ) => $isShow && `${100% - $xlPositionLeftList}` }; //
    z-index: 3;
    cursor: pointer;

    @media ${device.sm} {
        top: ${( { $smPositionTopList } ) => $smPositionTopList || '0'}; //
    }
`;

export const TextWrapp = styled.div`
    /* background-color: yellow; */
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    margin-right: 2px;
    font-size: 24px;
`;

export const TextCode = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    color: ${black};

    @media ${device.sm} {
        font-size: 16px;
        line-height: calc(22.4 / 16);
        letter-spacing: 0.16px;
    }
`;

export const List = styled.ul`
    margin-top: 20px;
    margin-left: -32px;
    padding: 20px 32px;
    width: 100%;
    height: ${( { $xlHeightList } ) => $xlHeightList};

    border-width: 1px;
    border-style: solid;
    border-radius: 20px 0px;
    border-color: ${grayStroke};

    background-color: ${white};
    overflow-y: auto;
    scroll-behavior: smooth;

    & > :not(:last-child) {
        margin-bottom: ${( { $xlGapList } ) => $xlGapList};

        @media ${device.md} {
            margin-bottom: ${( { $mdGapList } ) => $mdGapList};
        }

        @media ${device.sm} {
            margin-bottom: ${( { $smGapList } ) => $smGapList};
        }
    }

    @media ${device.md} {
        height: ${( { $mdHeightList } ) => $mdHeightList};
    }

    @media ${device.sm} {
        margin-top: 12px;
        height: ${( { $smHeightList } ) => $smHeightList};
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;

    & > p {
        font-size: ${( { $xlFontSizeList } ) => $xlFontSizeList};
        font-weight: 400;
        line-height: calc(22.4 / ${( { $xlFontSizeList } ) => $xlFontSizeList});
        color: ${black};

        @media ${device.md} {
            font-size: ${( { $mdFontSizeList } ) => $mdFontSizeList};
            line-height: calc(22.4 / ${( { $mdFontSizeList } ) => $mdFontSizeList});
        }

        @media ${device.sm} {
            font-size: ${( { $smFontSizeList } ) => $smFontSizeList};
            line-height: calc(22.4 / ${( { $smFontSizeList } ) => $smFontSizeList});
        }
    }

    & > :nth-child(1) {
        margin-right: 12px;
        font-size: 24px; // розмір відноситься до флагу в PhoneSelect
    }

    & > :nth-child(2) {
        margin-right: 8px;
    }
`;
