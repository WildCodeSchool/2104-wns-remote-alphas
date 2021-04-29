import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.div`
	background-color: #292929;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 7rem;
	padding-right: 2rem;
	padding-left: 2rem;
	border-bottom: 3px solid #68d0fc;
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
`;

const Navigate = styled.a`
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

const Header = (): JSX.Element => (
	<HeaderContent>
		<TitleContent>
			<img style={{ width: '280px' }} src="/assets/images/logo.svg" alt="Masterize" />
		</TitleContent>
		<MenuContent>
			<Navigate href="/">Home</Navigate>
			<Navigate href="/courses">Courses</Navigate>
			<Navigate href="/wiki">Wiki</Navigate>
			<Navigate href="/help">Help</Navigate>
			<ButtonChat type="button">Chat Now</ButtonChat>
		</MenuContent>
	</HeaderContent>
);

export default Header;
