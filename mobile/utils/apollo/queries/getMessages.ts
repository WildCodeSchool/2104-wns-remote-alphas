import { gql } from '@apollo/client';

const GET_MESSAGES = gql`
	query {
		getMessages {
			_id
			author {
				_id
				firstName
			}
			text
			sentAt
		}
	}
`;

export default GET_MESSAGES;
