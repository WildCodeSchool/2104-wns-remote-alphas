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

const TimelineContent = styled.div`
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
		<TimelineContent data-testid="timeline">
			<Chrono
				items={data.getCourses.map((course: CourseType, index: number) => ({
					key: index,
					title: course.postedAt
						? convertDate(course.postedAt, 'fr')
						: 'No date available',
					cardTitle: course.courseName,
					cardDetailedText: course.description,
					media: {
						source: {
							url: course.image_url,
						},
						type: 'IMAGE',
						name: 'test image',
					},
				}))}
				mode="HORIZONTAL"
				slideShow
				itemWidth={500}
				theme={{
					primary: '#68d0fc',
					secondary: 'white',
					cardBgColor: 'white',
					cardForeColor: 'white',
				}}>
				<div className="chrono-icons">
					{data.getCourses.map(() => (
						<img src={logo} alt={logo} />
					))}
				</div>
				{data.getCourses.map((course: CourseType, index: number) => (
					<button
						type="button"
						key={index}
						onClick={() => {
							history.push(`/courses/${course._id}`);
						}}>
						See course
						<span role="img" aria-label="Books">
							📚
						</span>
					</button>
				))}
			</Chrono>
		</TimelineContent>
	);
}

export default Timeline;
