import styled from 'styled-components';
import { Button } from '../../../common/button/Button';

export const Item = styled.li`
display: flex;
padding: 32px 32px 32px 40px;
border-top-right-radius: 20px;
border-bottom-left-radius: 20px;
border: 1px solid ${ ( { theme } )=> theme.colors.black};
border-left: 8px solid ${ ( { theme, selectedType } ) => selectedType
        ? theme.colors.accent
        : theme.colors.primary };
`;
export const StudentInfoBox = styled.div`
    display: flex;
    gap:16px;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 76px;
`;
export const StudentInfo = styled.div`
    padding-right: 32px;
`;
export const StudentImage = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid  ${ ( { theme, selectedType } ) => selectedType
    ? theme.colors.accent
    : theme.colors.primary};
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
`;
export const StudentName = styled.p`
    font-weight: 600;
    margin-bottom: 4px;
`;

export const LessonDetails = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 32px;
    font-size: 20px;
    line-height: 28px;
    border-left: 1px solid ${ ( { theme } ) => theme.colors.grayStroke};
`;

export const LessonDetailsItem = styled.li`
    display: flex;
    gap: 16px;
`;
export const LessonDetailsTitle = styled.p`
    width: 86px;
    color: ${ ( { theme } ) => theme.colors.grayText};
`;
export const LessonDetailsValue = styled.p`
    color: ${ ( { theme } ) => theme.colors.black};
`;
export const CancelBtn = styled( Button )`
border: none;
    width: 298px;
    height: 48px;
    font-size: 20px;
    font-weight: 600;
    position: relative; 

  &::before {
    content: attr(title); 
    position: absolute;
    top: 48px;
    left: 146px; 
    width: 319px;
    padding: 10px;
    font-weight: 400;
    color: ${( { theme } )=> theme.colors.black};
    background-color: ${( { theme } ) => theme.colors.white};
    box-shadow: 4px 4px 4px 0 rgba(45, 45, 45, 0.2), 0 2px 4px 0 rgba(45, 45, 45, 0.2);
    font-size: 16px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
  }
`;

