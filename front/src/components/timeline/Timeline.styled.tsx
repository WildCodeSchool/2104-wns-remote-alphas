/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';
import convertDate from '../../utils/convertDate';
import { GET_COURSES } from '../../utils/apollo';
import { CourseType } from '../../utils/types';
import logo from '../../utils/img/apple-touch-icon.png';
import Loader from '../core/Loader.styled';
import Error from '../core/Error.styled';
import Button from '../core/buttons/Button.styled';

const TimelineContent = styled.main`
	width: 100%;
	height: calc(100vh - 113px - 105px);
	background-color: ${(props) => props.theme.colors.primary};
`;

function Timeline(): JSX.Element {
	const { loading, error, data } = useQuery(GET_COURSES);
	const history = useHistory();

	if (loading) return <Loader />;
	if (error) return <Error />;
	return (
		<TimelineContent data-testid="timeline" id="main-content">
			<Chrono
				items={data.getCourses.map((course: CourseType, index: number) => ({
					key: index,
					title: course.postedAt
						? convertDate(course.postedAt, 'En')
						: 'No date available',
					cardTitle: course.courseName,
					cardDetailedText: course.description,
					media: {
						source: {
							url: course.image_url,
						},
						type: 'IMAGE',
						name: 'course image',
					},
				}))}
				mode="HORIZONTAL"
				itemWidth={500}
				theme={{
					primary: '#68d0fc',
					secondary: 'white',
					cardBgColor: 'white',
					cardForeColor: 'white',
				}}>
				{/* <div className="chrono-icons">
					{data.getCourses.map((course: CourseType) => (
						<img key={course._id} src={logo} alt={logo} />
					))}
				</div> */}
				{data.getCourses.map((course: CourseType) => (
					<Button
						type="button"
						key={course._id}
						onClick={() => {
							history.push(`/courses/${course._id}`);
						}}>
						See the course
					</Button>
				))}
			</Chrono>
		</TimelineContent>
	);
}

export default Timeline;
