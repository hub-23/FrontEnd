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
  width: ${( { size } ) => handleSizeType( size )};
  height: 60px;

  /* border: 1px solid rgba(45, 45, 45, 1); */
  border-radius: 20px 0px 20px 0px;
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
  align-self: ${( props ) => props.alginself || 'center'};

  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-align: center;
  outline: none;
  cursor: pointer;

  ${switchProp( 'variant', {
    primary: css`
          color: ${( props ) => props.color || props.theme.colors.black};
          background: ${( props ) => props.background || props.theme.colors.white};
          border: 1px solid ${( props ) => props.border || props.theme.colors.black};

    `,
    secondary: css`
          color: ${( props ) => props.color || props.theme.colors.white};
          background: ${( props ) => props.background || props.theme.colors.black};
          border: 1px solid ${( props ) => props.border || props.theme.colors.black};

    `,
    pink: css`
          color: ${( props ) => props.color || props.theme.colors.white};
          background: ${( props ) => props.background || props.theme.colors.liner_pink};
          border: 1px solid ${( props ) => props.border || 'transparent'};
            &:hover{
            background: linear-gradient(267.92deg, #B92759 0%, #E3669C 100%);
            transition: all 0.5s ease;
            };
            &:active{
              background: rgba(227, 102, 156, 1);
              
            };
            &:disabled{
              background: rgba(213, 213, 213, 1);
            }
    `,

    blue: css`
        color: ${( props ) => props.color || props.theme.colors.white};
        background: ${( props ) => props.background || props.theme.colors.liner_blue};
        border: 1px solid ${( props ) => props.border || 'transparent'};
            &:hover{
              background: linear-gradient(267.92deg, #09194D 0%, #234890 100%);
              transition: all 0.5s ease;
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
  } ) } 
  `;


export default StyledButton;
