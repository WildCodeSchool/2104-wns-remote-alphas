import React from 'react';
import styled from 'styled-components';
import Header from './Header.styled';
import Footer from './Footer.styled';

/**
 * Build a layout template with the app header and footer.
 * Navigation is done inside the nested children.
 */
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
