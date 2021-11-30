import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.colors.quaterny};
  padding: ${(props) => props.theme.padding.s};
  margin: auto;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  box-shadow: ${(props) => props.theme.fixedSize.boxShadow};
  cursor: pointer;
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

function CardCoursesSecondary({
  title, image, imageDescription, course, // id
 }: Props): JSX.Element {
  const history = useHistory();

  function clickCourse() {
		// history.push(`/courses/${id}`);
	}
   return (
  <Card
    onClick={() => {
    clickCourse();
  }}>
    <Title data-testid="title-secondary-card">{title}</Title>
    <Container>
      <Image src={image} alt={imageDescription} />
    </Container>
    <Line />
    <ThemeCourse>{course}</ThemeCourse>
  </Card>

   );
 }

interface Props {
  title: string,
  image: string,
  imageDescription: string,
  course: string,
  // id: string,
}

export default CardCoursesSecondary;
