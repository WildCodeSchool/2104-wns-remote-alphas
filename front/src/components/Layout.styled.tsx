import React from 'react';
import styled from 'styled-components';
import Header from './Header.styled';
import Footer from './Footer.styled';

const Container = styled.div``;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<>
		<Header />
		<Container>{children}</Container>
		<Footer />
	</>
);

export default Layout;
