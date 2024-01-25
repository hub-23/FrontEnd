import styled from 'styled-components';

export const Dropdown = styled.div`
    background-color: ${( props ) => props.color || props.theme.colors.white};
    position: absolute;
    top: 60px;
    z-index: 1;
    margin-top: 4px;
    padding: 15px 0;
    width: 100%;
    border-radius: 16px 0px;
    box-shadow: 0px -1px 4px 0px rgba(45, 45, 45, 0.05),
                 4px 4px 4px 0px rgba(45, 45, 45, 0.20),
                 -2px 0px 4px 0px rgba(45, 45, 45, 0.05);                 
    & > ul > li {
        padding: 5px 36px;
        font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        color: ${( props ) => props.color || props.theme.colors.black};
        &:not(:last-child) {
           margin-bottom: 2px; 
        }
    }
`;

export const DropdownItem = styled.li`
    cursor: pointer;
    &:hover,
     :focus {
        background-color: #F9F9F9;
    }
`;
