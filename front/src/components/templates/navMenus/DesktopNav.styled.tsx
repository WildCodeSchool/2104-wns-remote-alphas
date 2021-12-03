import React, { useContext } from 'react';
import styled from 'styled-components';
import Logout from '../../authentication/Logout';
import Context from '../../context/Context';
import LinkReactRouter from '../components/LinkReactRouter.styled';
import MenuContent from '../components/MenuContent.styled';

/**
 * Build desktop nav menu
 */
const ButtonChat = styled.button`
	cursor: pointer;
	border: 2px solid #68d0fc;
	border-radius: 4px;
	background-color: #292929;
	color: #68d0fc;
	height: 41px;
	width: 117px;
	&:hover {
		background-color: #68d0fc;
		color: white;
	}
	&:focus {
		outline: none;
		background-color: #68d0fc;
		color: white;
		border: 2px solid white;
	}
`;

const DesktopNav = (): JSX.Element => {
	const { user } = useContext(Context);

	return (
		<MenuContent data-testid="menu">
			<LinkReactRouter to="/">
				<text>Home</text>
			</LinkReactRouter>

			<LinkReactRouter to="/courses">
				<text>Courses</text>
			</LinkReactRouter>

			<LinkReactRouter to="/wiki">
				<text>Wiki</text>
			</LinkReactRouter>

			<LinkReactRouter to="help">
				<text>Help</text>
			</LinkReactRouter>

			{(user?.role === 'teacher' || user?.role === 'admin') && (
				<LinkReactRouter to="/backoffice">
					<text>Office</text>
				</LinkReactRouter>
			)}

			<ButtonChat type="button">Chat Now</ButtonChat>

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
export default DesktopNav;
