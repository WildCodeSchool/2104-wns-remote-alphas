import { gql } from '@apollo/client';

const GET_USERS = gql`
	query {
		getUsers {
			name
			firstName
			role
			_id
			location
		}
	}
`;

export default GET_USERS;
