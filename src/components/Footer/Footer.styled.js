import styled from 'styled-components';

export const FooterSection = styled.section`
    padding-top: 64px;
    padding-bottom: 22px;
    background-color:  ${( props ) => props.color || props.theme.colors.primary};
`;

export const FooterContainer = styled.div`
    border: 1px solid yellow;
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 158px;
`;

export const ContentOrganizer = styled.div`
    display: flex;
`;

export const Header = styled.h4`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;

export const ContactsWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
    /* align-items: center; */
`;

export const Contacts = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;

export const Terms = styled.a`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;

export const Rights = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 300;
    line-height: 140%; /* 22.4px */
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;
