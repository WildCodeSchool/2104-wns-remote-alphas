import { gql } from '@apollo/client';

const ME = gql`
	mutation me {
		me {
			_id
			name
			firstName
			email
			role
			location
		}
	}
`;

export default ME;
