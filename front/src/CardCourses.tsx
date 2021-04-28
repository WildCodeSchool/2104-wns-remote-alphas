import React from 'react';
import styled from 'styled-components';
import graphql from './graphql.png';

const Card = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.quaterny};
  padding: ${(props) => props.theme.padding.card};
  margin: ${(props) => props.theme.margin.card};
  border-radius: 30px;
  box-shadow: 10px 10px 7px -3px rgba(0,0,0,0.29);
`;

const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const ThemeCourse = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.tertiary};
  margin: ${(props) => props.theme.margin.cardFooter};
`;

const Container = styled.div`
  margin: ${(props) => props.theme.margin.cardImage};
`;

const Image = styled.img`
  width: 100%;
`;

const Line = styled.hr`
  width: 100%;
`;

const CardCourses = (): JSX.Element => (
  <Card>
    <Title>GraphQL API</Title>
    <Container>
      <Image src={graphql} alt="" />
    </Container>
    <Line />
    <ThemeCourse>front-end | GraphQL</ThemeCourse>
  </Card>

);

export default CardCourses;
