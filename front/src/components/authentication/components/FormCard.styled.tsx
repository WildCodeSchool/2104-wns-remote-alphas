import styled from 'styled-components';

/**
 * Styled card for login / signup forms
 */
const FormCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  margin: auto;
  width: 100%;
`;

export default FormCard;
