import styled from 'styled-components';

/**
 * Button for authentication forms
 */
 const Button = styled.button`
 margin: auto;
 width: 85%;
 height: 2.5rem;
 cursor: pointer;
 border-radius: 5px;
 color: white;
 border: 1px solid #68d0fc;
 background-color: #68d0fc;
 font-size: 1rem;
 :hover {
     background-color: #2bb7f3;
     border-color: #2bb7f3;
 }
`;

export default Button;
