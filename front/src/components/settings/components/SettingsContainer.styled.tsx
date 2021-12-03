import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    flex-direction: column;
    margin: ${(props) => props.theme.margin.generic.large};
    flex-wrap: wrap;
    justify-content: stretch;
    width: 60%;
`;

export default Container;
