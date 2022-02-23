import React, { useContext } from 'react';
import Logout from '../../authentication/Logout';
import Context from '../../context/Context';
import MenuContent from '../components/MenuContent.styled';
import LinkReactRouter from '../components/LinkReactRouter.styled';
import HomeIcon from '../../assets/icons/HomeIcon';
import CourseIcon from '../../assets/icons/CourseIcon';
import WikiIcon from '../../assets/icons/WikiIcon';
import HelpIcon from '../../assets/icons/HelpIcon';
import OfficeIcon from '../../assets/icons/OfficeIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import { ROLES } from '../../../utils/types';

/**
 *  Build nav menu for tablets and medium screens
 * */
const TabletNav = (): JSX.Element => {
	const { user } = useContext(Context);

	return (
		<MenuContent data-testid="menu" style={{ width: '450px' }}>
			<LinkReactRouter to="/">
				<HomeIcon />
			</LinkReactRouter>

			<LinkReactRouter to="/courses">
				<CourseIcon />
			</LinkReactRouter>

			<LinkReactRouter to="/wiki">
				<WikiIcon />
			</LinkReactRouter>

			{/* <LinkReactRouter to="help">
				<HelpIcon />
			</LinkReactRouter> */}

			{(user?.role === ROLES.TEACHER || user?.role === ROLES.ADMIN) && (
				<LinkReactRouter to="/backoffice">
					<OfficeIcon />
				</LinkReactRouter>
			)}
			{user?.role === ROLES.ADMIN && (
				<LinkReactRouter to="/admin">Admin</LinkReactRouter>
			)}

			<LinkReactRouter to="/chatRoom">
				<ChatIcon />
			</LinkReactRouter>

			<LinkReactRouter to="/settings">
				<SettingsIcon />
			</LinkReactRouter>

			<Logout />
		</MenuContent>
	);
};
export default TabletNav;
