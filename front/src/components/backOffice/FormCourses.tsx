/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line object-curly-newline
import { useMutation, useQuery, ApolloError } from '@apollo/client';
import ListCoursesback from './ListCoursesBack';
import FormMasterBackOffice from './FormMasterbackOffice';
import ModalConfirmation from '../core/ModalConfirmation';
import {
	ADD_COURSE,
	DELETE_ONE_COURSE,
	GET_COURSES,
	UPDATE_COURSE,
} from '../../utils/apollo';

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
	overflow: scroll;
`;

const ListCoursesBackOffice = styled.div`
	//border: 2px solid red;
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
	//border: 2px solid yellow;
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
	postedAt: string;
	_id: string;
}

function FormCourses(): JSX.Element {
	const initialState = {
		courseName: '',
		image_url: '',
		description: '',
		technos: '',
		_id: '',
		postedAt: '',
	};
	const initialErrorState = {
		status: false,
		message: '',
	};
	const [formErrorState, setFormErrorState] = useState(initialErrorState);
	const { data } = useQuery(GET_COURSES);

	const [courses, setCourses] = useState<CourseType[]>([]);

	useEffect(() => {
		if (data) {
			setCourses([...data.getCourses]);
		}
	}, [data]);

	const [postCourseState, setPostCourseState] = useState(initialState);

	const [buttonType, setButtonType] = useState<'post' | 'update'>('post');

	const [addCourseMutation] = useMutation(ADD_COURSE);
	const [updateOneCourseMutation] = useMutation(UPDATE_COURSE);
	const [deleteOneCourseMutation] = useMutation(DELETE_ONE_COURSE);

	const [showModal, setShowModal] = useState<boolean>(false);

	const [opacityUnderModal, setOpacityUnderModal] = useState(1);

	async function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		if (buttonType === 'update') {
			try {
				const {
					data: { updateOneCourse },
				} = await updateOneCourseMutation({
					variables: {
						courseName: postCourseState.courseName,
						image_url: 'http://reactjs/image.fr',
						description: postCourseState.description,
						technos: postCourseState.technos.split(' '),
						_id: postCourseState._id,
					},
				});
				if (updateOneCourse) {
					setPostCourseState(initialState);
					setCourses(
						courses.map((item) => {
							if (item._id === updateOneCourse._id) {
								return updateOneCourse;
							}
							return item;
						})
					);
					setButtonType('post');
				}
			} catch (err) {
				if (err instanceof ApolloError) {
					setFormErrorState({ status: true, message: err.message });
				}
			}
		} else {
			try {
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
			} catch (err) {
				if (err instanceof ApolloError) {
					setFormErrorState({ status: true, message: err.message });
				}
			}
		}
	}

	function closeModal() {
		setShowModal(false);
		setPostCourseState(initialState);
		setOpacityUnderModal(1);
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
				courses.filter((course) => course._id !== deleteOneCourse._id)
			);
			closeModal();
			setButtonType('post');
		}
	}

	function toggleModal(item: CourseType): void {
		setShowModal(!showModal);
		if (!showModal) {
			setPostCourseState({
				courseName: item.courseName,
				technos: item.technos.join(' '),
				description: item.description,
				image_url: item.image_url,
				_id: item._id,
				postedAt: item.postedAt,
			});
			setOpacityUnderModal(0.05);
		} else {
			setPostCourseState(initialState);
		}
	}

	function fetchOneCourse(_id: string) {
		const course = courses.find((item) => item._id === _id);
		if (course) {
			setPostCourseState({
				courseName: course.courseName,
				technos: course.technos.join(' '),
				description: course.description,
				image_url: course.image_url,
				_id: course._id,
				postedAt: course.postedAt,
			});
			setButtonType('update');
		}
	}

	function handleChange(value: string, name: string) {
		setPostCourseState({
			...postCourseState,
			[name]: value,
		});
	}

	function onCancel() {
		setButtonType('post');
		setPostCourseState(initialState);
		setOpacityUnderModal(1);
	}

	return (
		<>
			<BackOfficeTitle>
				<h1>Back Office</h1>
			</BackOfficeTitle>

			<FormContent style={{ opacity: `${opacityUnderModal}` }}>
				<ListCoursesBackOffice>
					<H2>Liste des cours</H2>
					<ListCoursesback
						courses={courses}
						// deleteCourse={deleteCourse}
						fetchById={fetchOneCourse}
						displayModal={toggleModal}
					/>
				</ListCoursesBackOffice>
				<Form>
					<H2>Poster un cours</H2>
					<FormMasterBackOffice
						onChange={handleChange}
						courseInput={postCourseState}
						onSubmit={handleSubmit}
						buttonType={buttonType}
						onCancel={onCancel}
						errorState={formErrorState}
					/>
				</Form>
			</FormContent>
			{showModal && (
				<ModalConfirmation
					title="Confirmation"
					question="Es-tu sûr de vouloir supprimer ce cours ?"
					onConfirm={() => deleteCourse(postCourseState._id)}
					onCancel={closeModal}
					confirmActionName="Supprimer"
				/>
			)}
		</>
	);
}
export default FormCourses;
