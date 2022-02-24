import styled from 'styled-components';
/**
 * Build a simple reusable column
 */
const Column = styled.div<{ alignItems?: string; gap?: number }>`
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.margin.generic.small};
    gap: ${(props) => props.gap} ? ${(props) => props.gap} : ${({ theme }) =>
  theme.margin.generic.small};
    align-items: ${(props) => props.alignItems} ? ${(props) => props.alignItems} : '';
`;

export default Column;
