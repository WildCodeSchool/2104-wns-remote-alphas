/* eslint-disable no-confusing-arrow */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.article`
  background-color: ${(props) => props.theme.colors.opposite};
  margin: auto;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  box-shadow: ${(props) => props.theme.fixedSize.boxShadow};
  cursor: pointer;
  width: 25%;
  height: 80%;
  @media all and (max-width: 1000px) {
	min-width: 300px;
  	max-height: 280px;
  }
  :focus {
	:focus {
		box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.secondary};
	}
  }
`;

const Title = styled.h2`
  text-align: left;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: normal;
  margin: 0px;
  margin-bottom: .5em;
`;

const ThemeCourse = styled.div`
  color: ${(props) => props.theme.colors.tertiary};
  margin: ${(props) => props.theme.margin.mainCard};
  font-size: ${(props) => props.theme.fontSize.s};
  text-align: left;
  font-weight: 500;
`;

const Container = styled.div`
  // margin: ${(props) => props.theme.margin.imageCard};
  padding: ${(props) => props.theme.padding.s};
`;

const Image = styled.img`
  width: 60%;
  display: flex;
  margin: auto;
`;

const Line = styled.hr`
  width: 100%;
`;

function CardCoursesSecondary({
	title, image, imageDescription, techno1, techno2, id
}: Props): JSX.Element {
	const history = useHistory();

	function clickCourse() {
		history.push(`/courses/${id}`);
	}

	return (
		<Card
			className="course"
			tabIndex={0}
			onClick={() => {
				clickCourse();
			}}
			onKeyPress={(e) => e.key === 'Enter' && clickCourse()}
			>
			<Container>
				<Title data-testid="title-secondary-card">{title}</Title>
				<Image src={image} alt={imageDescription} />
			</Container>
			<Line />
			<ThemeCourse>
				{techno1}
				&nbsp;
				|
				&nbsp;
				{techno2}
			</ThemeCourse>
		</Card>

	);
}

interface Props {
	title: string,
	image: string,
	imageDescription: string,
	techno1: string,
	techno2: string,
	id: string,
}

export default CardCoursesSecondary;
