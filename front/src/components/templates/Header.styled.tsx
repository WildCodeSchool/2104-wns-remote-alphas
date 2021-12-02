import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context/Context';
import useWindowSize from '../../utils/useWindowSize';
import LinkReactRouter from './components/LinkReactRouter.styled';
import DesktopNav from './navMenus/DesktopNav.styled';
import TabletNav from './navMenus/TabletNav.styled';

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

const Header = (): JSX.Element => {
	const { width } = useWindowSize();
	const { isLogin } = useContext(Context);

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
				<>
					{width > 1000 && (
						<DesktopNav />
					)}
					{(width > 650 && width < 1000) && (
						<TabletNav />
					)}
				</>
			) : (
				<LinkReactRouter to="/signin">
					<img
						style={{ width: '25px' }}
						src="/assets/icons/022-login.svg"
						alt="Login"
					/>
				</LinkReactRouter>
			)}
		</HeaderContent>
	);
};
export default Header;
