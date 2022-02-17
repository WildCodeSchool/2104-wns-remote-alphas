import { gql } from '@apollo/client';

const UPDATE_COURSE = gql`
	mutation updateOneCourse(
		$courseName: String!
		$image_url: String!
		$description: String!
		$technos: [String!]
		$_id: ID!
	) {
		updateOneCourse(
			data: {
				courseName: $courseName
				description: $description
				technos: $technos
				image_url: $image_url
			}
			courseId: { _id: $_id }
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

export default UPDATE_COURSE;
