import { gql } from '@apollo/client';

const GET_COURSES = gql`
	query {
		getCourses {
			description
			technos
			courseName
			image_url
			postedAt
		}
	}
`;

export default GET_COURSES;
