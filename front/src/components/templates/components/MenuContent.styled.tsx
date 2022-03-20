import styled from 'styled-components';

/// A styled nav element for wrapping menu content
const MenuContent = styled.nav`
  display: flex;
  justify-content: ${(props) => props.style?.justifyContent || 'space-around'};
  align-items: center;
  list-style: none;
  width: ${(props) => props.style?.width || '700px'};
  height: 41px;
  font-weight: bold;
`;

export default MenuContent;
