import React from 'react';
import styled from 'styled-components';
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
function FormCourses(): JSX.Element {
	return (
		<>
			<BackOfficeTitle>
				<h1>Back Office</h1>
			</BackOfficeTitle>

			<FormContent>
				<ListCoursesBackOffice>
					<H2>Liste des cours</H2>
					{/* <ContainerList> */}
					<ListCoursesback />
					{/* </ContainerList> */}
				</ListCoursesBackOffice>
				<Form>
					<H2>Poster un cours</H2>
					<FormMasterBackOffice />
				</Form>
			</FormContent>
		</>
	);
}

export default FormCourses;
