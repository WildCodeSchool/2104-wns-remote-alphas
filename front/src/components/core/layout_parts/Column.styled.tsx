import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: ${(props) => props.theme.margin.generic.small};
    gap: 0;
`;

export default Column;
