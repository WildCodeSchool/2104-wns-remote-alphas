import styled from 'styled-components';

import ColorLuminance from '../../../utils/colorLuminance';

/**
 * Button for authentication forms
 */
const Button = styled.button`
  margin: auto;
  width: 85%;
  height: 3rem;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  :hover {
    background-color: ${(props) => ColorLuminance(props.theme.colors.quaterny, +0.5)};
    border-color: ${(props) => ColorLuminance(props.theme.colors.quaterny, +0.5)};
  }
`;

export default Button;
