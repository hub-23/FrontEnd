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
