/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';
import {
    useMutation,
    useQuery,
    ApolloError
} from '@apollo/client';
import {
    getKeyboardFocusableElements,
    removeTabIndex,
    restoreTabIndex
} from '../../utils/trapFocus';
import {
    ADD_COURSE,
    DELETE_ONE_COURSE,
    GET_COURSES,
    UPDATE_COURSE,
} from '../../utils/apollo';
import { CourseType } from '../../utils/types';

const BackOfficeTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

const Container = styled.section`
	margin: auto;
	width: 80vw;
`;

function Office(): JSX.Element {
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

    const [courses, setCourses] = useState<CourseType[]>([]);
    const [postCourseState, setPostCourseState] = useState(initialState);
    const [content, setContent] = useState('Type your lesson here...');
    const [buttonType, setButtonType] = useState<'post' | 'update'>('post');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [opacityUnderModal, setOpacityUnderModal] = useState(1);
    // Get the focusable elements for focus trap
    const focusable = getKeyboardFocusableElements();

    const [addCourseMutation] =
        useMutation<{ addCourse: CourseType }>(ADD_COURSE);
    const [updateOneCourseMutation] =
        useMutation<{ updateOneCourse: CourseType }>(UPDATE_COURSE);

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (buttonType === 'update') {
            try {
                const updateCourseResult = await updateOneCourseMutation({
                    variables: {
                        courseName: postCourseState.courseName,
                        image_url: 'http://reactjs/image.fr',
                        description: postCourseState.description,
                        technos: postCourseState.technos.split(' '),
                        _id: postCourseState._id,
                    },
                });
                if (updateCourseResult?.data?.updateOneCourse) {
                    setPostCourseState(initialState);
                    setCourses(
                        courses.map((item) => {
                            if (item._id === updateCourseResult.data?.updateOneCourse._id) {
                                return updateCourseResult.data.updateOneCourse;
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
                const addCourseResult = await addCourseMutation({
                    variables: {
                        courseName: postCourseState.courseName,
                        image_url: 'http://reactjs/image.fr',
                        description: postCourseState.description,
                        technos: postCourseState.technos.split(' '),
                    },
                });
                if (addCourseResult.data?.addCourse) {
                    setPostCourseState(initialState);
                    setCourses([...courses, addCourseResult.data.addCourse]);
                }
            } catch (err) {
                if (err instanceof ApolloError) {
                    setFormErrorState({ status: true, message: err.message });
                }
            }
        }
    }

    function closeModal() {
        document.body.classList.remove('no-scroll');
        setShowModal(false);
        setPostCourseState(initialState);
        setOpacityUnderModal(1);
        restoreTabIndex(focusable);
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
            removeTabIndex(focusable);
        } else {
            setPostCourseState(initialState);
        }
    }

    function onCancel() {
        setButtonType('post');
        setPostCourseState(initialState);
        setOpacityUnderModal(1);
        restoreTabIndex(focusable);
    }

    // function handleChange(value: string, name: string) {
    // 	setPostCourseState({
    // 		...postCourseState,
    // 		[name]: value,
    // 	});
    // }

    const handleEditorChange = (e: any) => {
        console.log('Content was updated:', e.target.getContent());
        setContent(e.target.getContent());
    };

    return (
        <main id="main-content">
            <BackOfficeTitle>
                <h1>Back Office</h1>
            </BackOfficeTitle>
            <Container>
                <Editor
                    initialValue={content}
                    apiKey="uo6xwlecck0vqdpcf4664lo9n9vy747tarwspqgxq76e1655"
                    init={{
                        plugins: 'a11ychecker lists link image code media mediaembed advcode',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code image media link advcode',
                        height: '60vh',
                        image_caption: true
                    }}
                    onChange={handleEditorChange}
                />
            </Container>
        </main>
    );
}
export default Office;
