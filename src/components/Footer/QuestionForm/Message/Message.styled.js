import styled from 'styled-components';
import { Input } from '../QuestionForm.styled';
// import { device } from '../../../styles/device';


export const TextareaWrapper = styled.div`
    position: relative;
`;

export const Textarea = styled( Input )`
    min-height: 60px; // 120px
    overflow-y: hidden; 
    /* max-height: 270px; */
    resize: vertical;
    padding-right: 56px;
    /* &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(18, 20, 23, 0.05); 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(18, 20, 23, 0.1); 
    } */
`;

export const ClipBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: initial;
`;
