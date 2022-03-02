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
			settings {
				instantChat
				pandaTips
				colors {
					theme
					customColors
				}
				texts {
					font
					fontWeight
					fontTheme
				}
				distraction {
					distractionTheme
					textNotifications
					soundNotifications
					animations
					readingMode
					showTimelineCards
					allowDialogs
				}
				globalSettings {
					shortcuts
				}
			}
		}
	}
`;

export default ME;
