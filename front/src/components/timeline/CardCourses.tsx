import styled from 'styled-components';

const Card = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.opposite};
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

function CardCourses({ title, image, imageDescription, course }: Props): JSX.Element {
  return (
    <Card data-testid="card-course">
      <Title data-testid="card-title">{title}</Title>
      <Container>
        <Image data-testid="card-image" src={image} alt={imageDescription} />
      </Container>
      <Line />
      <ThemeCourse data-testid="card-theme">{course}</ThemeCourse>
    </Card>
  );
}

interface Props {
  title: string;
  image: string;
  imageDescription: string;
  course: string;
}

export default CardCourses;
