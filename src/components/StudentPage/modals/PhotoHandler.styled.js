import styled from 'styled-components';
import { Button } from 'components/common/button/Button';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    /* height: 482px; */
    padding-top: 64px;
    padding-bottom: 64px;
    border-radius: 20px 0;
    background-color: ${props => props.color || props.theme.colors.white};
`;

export const Title = styled.h2`
    margin-bottom: 32px;
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};    
    font-size: 32px;
    line-height: calc(38 / 32);
`;

export const CircleWrapper = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 32px;
    background-color: ${props => props.color || props.theme.colors.accent};

    img { // cropped photo
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const ImageWrapper = styled.div`
    margin-bottom: 32px;

    img { // uploaded but not cropped pphoto
        width: 400px;
        height: 400px;
        object-fit: cover;
    }
`;

export const BtnsWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const AddButton = styled.label`
    position: relative;

    button {
        width: 248px;
        font-size: 20px;
        font-weight: 600;
        line-height: calc(20 / 20);
    }
`;

export const CancelBtn = styled.button`
    padding: 14px 32px;
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.color || props.theme.colors.primary};
    font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};    
    font-size: 20px;
    font-weight: 600;
    line-height: calc(20 / 20);
`;

export const SaveButton = styled( Button )` 
    font-size: 20px;
    font-weight: 600;
    line-height: calc(20 / 20);
`;
