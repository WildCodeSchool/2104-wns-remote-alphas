import ADD_COURSE from './mutations/addCourse';
import DELETE_ONE_COURSE from './mutations/deleteCourse';
import LOGIN from './mutations/login';
import ME from './mutations/me';
import POST_MESSAGE from './mutations/postMessage';
import SIGNUP from './mutations/signup';
import UPDATE_COURSE from './mutations/updateOneCourse';
import UPDATE_ROLE from './mutations/updateRole';
import UPDATE_SETTINGS from './mutations/updateSettings';
import GET_COURSES from './queries/getCourses';
import GET_MESSAGES from './queries/getMessages';
import GET_ONE_COURSE from './queries/getOneCourse';
import GET_USERS from './queries/getUsers';
import GET_NEW_MESSAGE from './subscriptions/getNewMessage';

// eslint-disable-next-line object-curly-newline
export {
	ADD_COURSE,
	DELETE_ONE_COURSE,
	GET_COURSES,
	GET_MESSAGES,
	GET_ONE_COURSE,
	GET_NEW_MESSAGE,
	GET_USERS,
	LOGIN,
	ME,
	POST_MESSAGE,
	SIGNUP,
	UPDATE_COURSE,
	UPDATE_ROLE,
	UPDATE_SETTINGS,
};
