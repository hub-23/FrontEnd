import styled from 'styled-components';

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


export const LessonDetails = styled.table`
    display: block;
    padding-left: 32px;
  font-size: 20px;
    line-height: 28px;
    border-collapse: separate;
    border-spacing: 16px;
    border-left: 1px solid ${ ( { theme } ) => theme.colors.grayStroke};
`;
export const LessonDetailsItem = styled.tr`
    
    align-items:left;
`;
export const LessonDetailsTitle = styled.td`
    display: flex;
  
    color: ${ ( { theme } ) => theme.colors.grayText};
`;
export const LessonDetailsValue = styled.td`
    color: ${ ( { theme } ) => theme.colors.black};
`;


export const CancelBtn = styled.button`
 background: ${ ( { theme, selectedType } ) => selectedType
    ? theme.colors.liner_pink
    : theme.colors.liner_grey };
  border-color: transparent;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${ ( { theme } ) => theme.colors.white};
  padding: 14px 59px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;
