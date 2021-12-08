import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Logout from '../../authentication/Logout';
import Context from '../../context/Context';
import LinkReactRouter from '../components/LinkReactRouter.styled';
import MenuContent from '../components/MenuContent.styled';
import BurgerMenu from '../components/BurgerMenu.styled';

/**
 * Build mobile nav menu with collapsible drawer and burger icon
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

const BurgerButton = styled.button`
	background-color: #292929;
	border: none;
`;

const MobileNav = (): JSX.Element => {
	const { user } = useContext(Context);
	const [open, setOpen] = useState(false);

	return (
		<MenuContent style={{ justifyContent: 'flex-end' }}>
			<BurgerButton
				type="button"
				onClick={() => setOpen(!open)}
				onKeyDown={() => setOpen(!open)}>
				<img
					style={{ width: '30px' }}
					src="/assets/icons/030-burger.svg"
					alt="Settings"
				/>
			</BurgerButton>

			<BurgerMenu open={open} onClose={() => setOpen(!open)}>
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
				{user?.role === 'admin' && (
					<LinkReactRouter to="/admin">Admin</LinkReactRouter>
				)}
				<LinkReactRouter to="/settings">
					<text>Settings</text>
				</LinkReactRouter>

				<ButtonChat type="button">Chat Now</ButtonChat>

				<Logout />
			</BurgerMenu>
		</MenuContent>
	);
};
export default MobileNav;
