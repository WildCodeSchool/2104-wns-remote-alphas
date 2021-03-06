import React from 'react';
import styled from 'styled-components';

import Footer from './Footer.styled';
import Header from './Header.styled';

/**
 * Build a layout template with the app header and footer.
 * Navigation is done inside the nested children.
 */
const App = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
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
