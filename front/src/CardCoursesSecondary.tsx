import React from 'react';
import styled from 'styled-components';
import graphql from './graphql.png';

const Card = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.colors.quaterny};
  padding: ${(props) => props.theme.padding.s};
  margin: auto;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  box-shadow: ${(props) => props.theme.fixedSize.boxShadow};
`;

const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const ThemeCourse = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.tertiary};
  margin: ${(props) => props.theme.margin.mainCard};
`;

const Container = styled.div`
  margin: ${(props) => props.theme.margin.imageCard};
`;

const Image = styled.img`
  width: 100%;
`;

const Line = styled.hr`
  width: 100%;
`;

const CardCoursesSecondary = (): JSX.Element => (
  <Card>
    <Title>GraphQL API</Title>
    <Container>
      <Image src={graphql} alt="" />
    </Container>
    <Line />
    <ThemeCourse>front-end | GraphQL</ThemeCourse>
  </Card>

);

export default CardCoursesSecondary;
