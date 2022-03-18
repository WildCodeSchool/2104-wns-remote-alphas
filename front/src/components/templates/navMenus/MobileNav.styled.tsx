import { useContext, useState } from 'react';
import styled from 'styled-components';

import { ROLES } from '../../../utils/types';
import BurgerIcon from '../../assets/icons/BurgerIcon';
import Logout from '../../authentication/Logout';
import Context from '../../context/Context';
import BurgerMenu from '../components/BurgerMenu.styled';
import LinkReactRouter from '../components/LinkReactRouter.styled';
import MenuContent from '../components/MenuContent.styled';

/**
 * Build mobile nav menu with collapsible drawer and burger icon
 */

const ButtonChat = styled.button`
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  height: 41px;
  width: 117px;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textColor};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textColor};
    border: 2px solid ${(props) => props.theme.colors.textColor};
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
        <BurgerIcon />
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

        {/* <LinkReactRouter to="help">
					<text>Help</text>
				</LinkReactRouter> */}

        {(user?.role === ROLES.TEACHER || user?.role === ROLES.ADMIN) && (
          <LinkReactRouter to="/backoffice">
            <text>Office</text>
          </LinkReactRouter>
        )}
        {user?.role === ROLES.ADMIN && (
          <LinkReactRouter to="/admin">Admin</LinkReactRouter>
        )}
        <LinkReactRouter to="/settings">
          <text>Settings</text>
        </LinkReactRouter>

        <LinkReactRouter to="chatRoom">
          <ButtonChat type="button">Chat Now</ButtonChat>
        </LinkReactRouter>

        <Logout />
      </BurgerMenu>
    </MenuContent>
  );
};
export default MobileNav;
