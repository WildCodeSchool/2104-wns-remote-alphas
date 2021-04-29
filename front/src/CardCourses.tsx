import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.quaterny};
  padding: ${(props) => props.theme.padding.s};
  margin: auto;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  box-shadow: ${(props) => props.theme.fixedSize.boxShadow};
`;

const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.l};
`;

const ThemeCourse = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.tertiary};
  margin: ${(props) => props.theme.margin.mainCard};
  font-size: ${(props) => props.theme.fontSize.s};
  text-align: left;
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

// eslint-disable-next-line max-len
const CardCourses = ({
 title, image, imageDescription, course
}: Props): JSX.Element => (
  <Card>
    <Title>{title}</Title>
    <Container>
      <Image src={image} alt={imageDescription} />
    </Container>
    <Line />
    <ThemeCourse>{course}</ThemeCourse>
  </Card>

);

interface Props {
  title: string,
  image: string,
  imageDescription: string,
  course: string,
}

export default CardCourses;

// GraphQL API
// {graphql}
// front-end | GraphQL
