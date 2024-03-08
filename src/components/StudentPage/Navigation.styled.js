import styled from 'styled-components';

export const StyledList = styled.ul`
  a {
    display: block;
    display: flex;
    width: 429px;
    height: 60px;
    color: ${props => props.color || props.theme.colors.black};
    padding: 16px 0px 16px 160px;

    &.active {
      border-radius: 0px 56px 56px 0px;
      background-color: #f9f9f9;
      color: ${props => props.color || props.theme.colors.accent};

      svg {
        path {
          stroke: ${props => props.color || props.theme.colors.accent};
        }
      }
    }
  }
`;

// export const StyledNavLink = styled.a`
//   padding: 16px 0px 16px 16px;
// `;

export const StyledTitle = styled.h2`
  width: 245px;
  height: 28px;
  padding-left: 16px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
`;
