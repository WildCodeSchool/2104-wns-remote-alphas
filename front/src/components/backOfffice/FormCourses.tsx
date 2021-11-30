import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useMutation, gql, useQuery } from '@apollo/client';
import ListCoursesback from './ListCoursesBack';
import FormMasterBackOffice from './FormMasterbackOffice';

const BackOfficeTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

const FormContent = styled.div`
	margin: auto;
	display: flex;
	justify-content: space-around;
	width: 90%;
	height: 60rem;
	border: 3px solid white;
`;

const ListCoursesBackOffice = styled.div`
	border: 2px solid red;
	width: 40%;
	height: 100%;
`;

// const ContainerList = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	flex-direction: column;
// 	gap: 3rem;
// `;

const Form = styled.div`
	border: 2px solid yellow;
	width: 60%;
	height: 100%;
`;

const H2 = styled.h2`
	color: white;
	text-align: center;
`;

export interface CourseType {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
	postedAt?: string;
	_id: string;
}

export const GET_COURSES_QUERY = gql`
	query {
		getCourses {
			description
			technos
			courseName
			image_url
			postedAt
			_id
		}
	}
`;
export const ADD_COURSE = gql`
	mutation addCourse(
		$courseName: String!
		$image_url: String!
		$description: String!
		$technos: [String!]
	) {
		addCourse(
			course: {
				courseName: $courseName
				description: $description
				technos: $technos
				image_url: $image_url
			}
		) {
			courseName
			description
			technos
			image_url
			_id
			postedAt
		}
	}
`;

export const DELETE_ONE_COURSE = gql`
	mutation deleteOneCourse($_id: ID!) {
		deleteOneCourse(courseId: { _id: $_id }) {
			_id
			message
		}
	}
`;

function FormCourses(): JSX.Element {
	const initialState = {
		courseName: '',
		image_url: '',
		description: '',
		technos: '',
	};
	const { data } = useQuery(GET_COURSES_QUERY);

	const [courses, setCourses] = useState<CourseType[]>([]);
	useEffect(() => {
		if (data) {
			setCourses([...data.getCourses]);
		}
	}, [data]);
	const [postCourseState, setPostCourseState] = React.useState(initialState);
	const [addCourseMutation] = useMutation(ADD_COURSE);
	const [deleteOneCourseMutation] = useMutation(DELETE_ONE_COURSE);
	async function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const {
			data: { addCourse },
		} = await addCourseMutation({
			variables: {
				courseName: postCourseState.courseName,
				image_url: 'http://reactjs/image.fr',
				description: postCourseState.description,
				technos: postCourseState.technos.split(' '),
			},
		});
		if (addCourse) {
			setPostCourseState(initialState);
			setCourses([...courses, addCourse]);
		}
	}
	async function deleteCourse(_id: string) {
		const {
			data: { deleteOneCourse },
		} = await deleteOneCourseMutation({
			variables: {
				_id,
			},
		});
		if (deleteOneCourse) {
			setCourses(
				// eslint-disable-next-line no-underscore-dangle
				courses.filter((course) => course._id !== deleteOneCourse._id)
			);
		}
	}
	function handleChange(value: string, name: string) {
		setPostCourseState({
			...postCourseState,
			[name]: value,
		});
	}
	return (
		<>
			<BackOfficeTitle>
				<h1>Back Office</h1>
			</BackOfficeTitle>

			<FormContent>
				<ListCoursesBackOffice>
					<H2>Liste des cours</H2>
					<ListCoursesback courses={courses} deleteCourse={deleteCourse} />
				</ListCoursesBackOffice>
				<Form>
					<H2>Poster un cours</H2>
					<FormMasterBackOffice
						onChange={handleChange}
						courseInput={postCourseState}
						onSubmit={handleSubmit}
					/>
				</Form>
			</FormContent>
		</>
	);
}

export default FormCourses;
