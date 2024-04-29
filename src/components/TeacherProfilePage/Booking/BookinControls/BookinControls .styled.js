import styled from 'styled-components';

export const СontrollersList = styled.ul`
    display: flex;
    margin-bottom: 20px;
`;
export const СontrollersItems = styled.li`
    &:first-child button{
        border-bottom-left-radius: 20px;
    }

    &:last-child button{
        border-top-right-radius: 20px;
    }
`;
export const BtnСontroller = styled.button`
    padding: 8px 141px;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    border: 1px solid ${ ( { theme } ) =>  theme.colors.black};
    background-color: ${ ( { theme, isActive } ) => isActive ? theme.colors.black : theme.colors.white };
    color: ${ ( { theme, isActive } ) => isActive ? theme.colors.white : theme.colors.black };
`;
