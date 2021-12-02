import React from 'react';
import styled from 'styled-components';
import Header from './templates/Header.styled';
// import Footer from './templates/Footer.styled';

const Container = styled.div``;
const App = styled.div`
	min-height: 100%;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<App>
		<Header />
		<Container>{children}</Container>
		{/* <Footer /> */}
	</App>
);

export default Layout;
