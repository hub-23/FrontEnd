import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

const handleSizeType = ( size ) => {
  switch ( size ) {
    case 'large':
      return '705px';
    case 'small':
      return '60px';
    case 'medium':
      return '217px';
    default:
      return '330px';
  }
};

const StyledButton = styled.button`
    width: ${( props ) => props.width || '230px'};
    height: ${( props ) => props.height || '48px'};
    // width: ${( { size } ) => handleSizeType( size )};
    // height: 60px;

    /* border: 1px solid rgba(45, 45, 45, 1); */
    border-radius: ${( props ) => props.borderRadius || '20px 0px'};
    // border-radius: 20px 0px 20px 0px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    align-self: ${( props ) => props.alignself || 'center'};
    // padding: 14px 24px;
    // font-size: 26px;
    // font-weight: 600;
    // line-height: 26px;
    font-style: normal;
    letter-spacing: 0.01em;
    text-align: center;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      height: ${( props ) => props.smHeight};
      border-radius: ${( props ) => props.smBorderRadius};
    }

    ${switchProp( 'variant', {
    primary: css`
            color: ${( props ) => props.color || props.theme.colors.white};
            background: ${( props ) => props.background || props.theme.colors.primary};
            // color: ${( props ) => props.color || props.theme.colors.black};
            // background: ${( props ) => props.background || props.theme.colors.white};
            border: 1px solid ${( props ) => props.border || props.theme.colors.black};
            transition: all 0.5s ease;
            &:hover {
                color: #2d2d2d;
                background: #ffffff;
                border: 4px solid #113268;
            }
            &:active {
                color: #2d2d2d;
                background: #ffffff;
                border: none;
                box-shadow: 2px 2px 4px 0px rgba(45, 45, 45, 0.2), -2px -2px 4px 0px rgba(45, 45, 45, 0.2);
            }
            &:disabled {
                background: rgba(213, 213, 213, 1);
            }
        `,
    secondary: css`
            color: ${( props ) => props.color || props.theme.colors.primary};
            background: ${( props ) => props.background || props.theme.colors.white};
            // color: ${( props ) => props.color || props.theme.colors.white};
            // background: ${( props ) => props.background || props.theme.colors.black};
            border: 1px solid ${( props ) => props.border || props.theme.colors.black};
            transition: all 0.5s ease;
            &:hover {
                // background: linear-gradient(267.92deg, #09194d 0%, #234890 100%);
                background: #113268;
                color: #ffffff;
                border: 4px solid #ffffff;
            }
            &:active {
                // background: rgba(227, 102, 156, 1);
                border: 4px solid #ffffff;
                box-shadow: 2px 2px 12px 0px rgba(255, 255, 255, 0.24),
                    -2px -2px 12px 0px rgba(255, 255, 255, 0.24);
            }
            &:disabled {
                background: rgba(213, 213, 213, 1);
            }
        `,
    pink: css`
            color: ${( props ) => props.color || props.theme.colors.white};
            background: ${( props ) => props.background || props.theme.colors.liner_pink};
            border: 1px solid ${( props ) => props.border || 'transparent'};
            transition: all 0.5s ease;
            &:hover {
                background: linear-gradient(267.92deg, #b92759 0%, #e3669c 100%);
            }
            &:active {
                background: rgba(227, 102, 156, 1);
            }
            &:disabled {
                background: rgba(213, 213, 213, 1);
            }
        `,
    blue: css`
        color: ${( props ) => props.color || props.theme.colors.white};
        background: ${( props ) => props.background || props.theme.colors.liner_blue};
        border: 1px solid ${( props ) => props.border || 'transparent'};
        transition: all 0.5s ease;
            &:hover{
              background: linear-gradient(267.92deg, #09194D 0%, #234890 100%);
            };
            &:active{
              background: rgba(17, 50, 104, 1);
            };
            &:disabled{
              background: rgba(213, 213, 213, 1);
            }
    }
    `,
    grey: css`
            color: ${( props ) => props.color || props.theme.colors.white};
            border: 1px solid ${( props ) => props.color || props.theme.colors.grey};
            background: ${( props ) => props.background || props.theme.colors.grey};
        `,
    transparent: css`
            color: ${( props ) => props.color || props.theme.colors.black};
            border: 1px solid ${( props ) => props.color || '#E3669C'};
            background: ${( props ) => props.background || props.theme.colors.white};
        `,
  } )}
`;

export default StyledButton;
