import React from 'react';
import styled from 'styled-components';
import Header from './Header.styled';
import Footer from './Footer.styled';

const App = styled.div`
	display: flex;
	flex-direction: column;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<App>
		<Header />
		{children}
		<Footer />
	</App>
);

export default Layout;
