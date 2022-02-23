import { useContext } from 'react';
import styled from 'styled-components';

import useWindowSize from '../../utils/useWindowSize';
import Context from '../context/Context';
import SkipLink from '../core/accessibility/SkipLink.styled';
import LinkReactRouter from './components/LinkReactRouter.styled';
import DesktopNav from './navMenus/DesktopNav.styled';
import MobileNav from './navMenus/MobileNav.styled';
import TabletNav from './navMenus/TabletNav.styled';

/**
 * Build a responsive app header with navigation menu
 */
const HeaderContent = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding-right: 2rem;
  padding-left: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
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
            aria-label="home link"
            role="navigation"
            style={{ width: width > 1000 ? '280px' : '' }}
            src="/assets/images/logo.svg"
            alt="Masterize"
          />
        </TitleContent>
      </LinkReactRouter>

      {isLogin ? (
        <>
          <SkipLink href="#main-content">
            <text>Skip to main content</text>
          </SkipLink>
          {width > 1000 && <DesktopNav />}
          {width > 650 && width < 1000 && <TabletNav />}
          {width < 650 && <MobileNav />}
        </>
      ) : (
        <LinkReactRouter to="/signin">
          <img
            aria-label="login"
            role="navigation"
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
