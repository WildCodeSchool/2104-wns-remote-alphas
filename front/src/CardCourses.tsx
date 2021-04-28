import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border: solid blue;
width: 25%;
min-height: 350px;
border-radius: 30px;
color: ${(props) => props.theme.colors.primary};
`;

const CardCourses = (): JSX.Element => (
    <Container>
        <p>GraphQL API</p>
        <img src="" alt="" />
        <hr />
        <p>front-end | GraphQL</p>
    </Container>

);

export default CardCourses;
