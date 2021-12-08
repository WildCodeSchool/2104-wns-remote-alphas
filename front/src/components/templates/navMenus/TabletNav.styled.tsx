import React, { useContext } from 'react';
import Logout from '../../authentication/Logout';
import Context from '../../context/Context';
import MenuContent from '../components/MenuContent.styled';
import LinkReactRouter from '../components/LinkReactRouter.styled';

/**
 *  Build nav menu for tablets and medium screens
 * */
const TabletNav = (): JSX.Element => {
	const { user } = useContext(Context);

	return (
		<MenuContent data-testid="menu" style={{ width: '450px' }}>
			<LinkReactRouter to="/">
				<img
					style={{ width: '30px' }}
					src="/assets/icons/024-home.svg"
					alt="Home"
				/>
			</LinkReactRouter>

			<LinkReactRouter to="/courses">
				<img
					style={{ width: '30px' }}
					src="/assets/icons/025-course.svg"
					alt="Courses"
				/>
			</LinkReactRouter>

			<LinkReactRouter to="/wiki">
				<img
					style={{ width: '30px' }}
					src="/assets/icons/026-wiki.svg"
					alt="Wiki"
				/>
			</LinkReactRouter>

			<LinkReactRouter to="help">
				<img
					style={{ width: '30px' }}
					src="/assets/icons/027-help.svg"
					alt="Help"
				/>
			</LinkReactRouter>

			{(user?.role === 'teacher' || user?.role === 'admin') && (
				<LinkReactRouter to="/backoffice">
					<img
						style={{ width: '30px' }}
						src="/assets/icons/028-add.svg"
						alt="Office"
					/>
				</LinkReactRouter>
			)}
			{user?.role === 'admin' && (
				<LinkReactRouter to="/admin">Admin</LinkReactRouter>
			)}

			<img
				style={{ width: '30px' }}
				src="/assets/icons/029-chat.svg"
				alt="Chat"
			/>

			<LinkReactRouter to="/settings">
				<img
					style={{ width: '30px' }}
					src="/assets/icons/013-settings.svg"
					alt="Settings"
				/>
			</LinkReactRouter>

			<Logout />
		</MenuContent>
	);
};
export default TabletNav;
