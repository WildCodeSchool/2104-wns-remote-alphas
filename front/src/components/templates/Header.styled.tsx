import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logout from '../authentication/Logout';
import Context from '../context/Context';
import useWindowSize from '../../utils/useWindowSize';

const HeaderContent = styled.div`
	background-color: #292929;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 7rem;
	padding-right: 2rem;
	padding-left: 2rem;
	border-bottom: 1px solid #68d0fc;
`;
const TitleContent = styled.div`
	align-items: center;
	cursor: pointer;
`;

const MenuContent = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	width: 700px;
	height: 41px;
	font-weight: bold;
`;

const LinkReactRouter = styled(Link)`
	text-decoration: none;
	color: white;
	cursor: pointer;
	&:hover {
		color: #68d0fc;
		text-decoration: underline;
	}
	&:focus {
		color: #68d0fc;
		text-decoration: underline;
		outline: none;
	}
`;

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

const Header = (): JSX.Element => {
	const { width } = useWindowSize();
	const { isLogin, user } = useContext(Context);

	return (
		<HeaderContent data-testid="header">
			<LinkReactRouter to="/">
				<TitleContent data-testid="logo-title">
					<img
						style={{ width: width > 1000 ? '280px' : '' }}
						src="/assets/images/logo.svg"
						alt="Masterize"
					/>
				</TitleContent>
			</LinkReactRouter>

			{isLogin ? (
				<MenuContent data-testid="menu">
					<LinkReactRouter to="/">
						{width > 1000 && (
							<text>Home</text>
						)}
						{width < 1000 && (
							<img
								style={{ width: '30px' }}
								src="/assets/icons/024-home.svg"
								alt="Masterize"
							/>
						)}
					</LinkReactRouter>
					<LinkReactRouter to="/courses">
					{width > 1000 && (
							<text>Courses</text>
						)}
						{width < 1000 && (
							<img
								style={{ width: '30px' }}
								src="/assets/icons/025-course.svg"
								alt="Masterize"
							/>
						)}
					</LinkReactRouter>
					<LinkReactRouter to="/wiki">
					{width > 1000 && (
							<text>Wiki</text>
						)}
						{width < 1000 && (
							<img
								style={{ width: '30px' }}
								src="/assets/icons/026-wiki.svg"
								alt="Masterize"
							/>
						)}
					</LinkReactRouter>
					<LinkReactRouter to="help">
					{width > 1000 && (
							<text>Help</text>
						)}
						{width < 1000 && (
							<img
								style={{ width: '30px' }}
								src="/assets/icons/027-help.svg"
								alt="Masterize"
							/>
						)}
					</LinkReactRouter>
					{user?.role === 'teacher' && (
						<LinkReactRouter to="/backoffice">
							{width > 1000 && (
							<text>Office</text>
						)}
						{width < 1000 && (
							<img
								style={{ width: '30px' }}
								src="/assets/icons/028-add.svg"
								alt="Masterize"
							/>
						)}
						</LinkReactRouter>
					)}

					{width > 1000 && (<ButtonChat type="button">Chat Now</ButtonChat>)}
					{width < 1000 && (
							<img
								style={{ width: '30px' }}
								src="/assets/icons/029-chat.svg"
								alt="Masterize"
							/>
					)}
					<LinkReactRouter to="/settings">
						<img
							style={{ width: '30px' }}
							src="/assets/icons/013-settings.svg"
							alt="Masterize"
						/>
					</LinkReactRouter>
					<Logout />
				</MenuContent>
			) : (
				<LinkReactRouter to="/signin">
					<img
						style={{ width: '25px' }}
						src="/assets/icons/022-login.svg"
						alt="Masterize"
					/>
				</LinkReactRouter>
			)}
		</HeaderContent>
	);
};
export default Header;
