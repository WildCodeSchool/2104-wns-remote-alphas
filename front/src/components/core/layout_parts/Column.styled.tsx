import styled from 'styled-components';
/**
 * Build a simple reusable column
 */
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: ${({ theme }) => theme.margin.generic.small};
    gap: 0;
`;

export default Column;
