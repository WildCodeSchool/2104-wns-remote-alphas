import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ROLES } from '../../../utils/types';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import Logout from '../../authentication/Logout';
import Context from '../../context/Context';
import LinkReactRouter from '../components/LinkReactRouter.styled';
import MenuContent from '../components/MenuContent.styled';

/**
 * Build desktop nav menu
 */
const ButtonChat = styled.button`
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  height: 41px;
  width: 117px;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textColor};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

const DesktopNav = (): JSX.Element => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <MenuContent data-testid="menu">
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

      <LinkReactRouter to="/chatRoom">
        <ButtonChat type="button">Chat Now</ButtonChat>
      </LinkReactRouter>

      {user?.role === ROLES.ADMIN && <LinkReactRouter to="/admin">Admin</LinkReactRouter>}
      <LinkReactRouter
        to="/settings"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            history.push('/settings');
          }
        }}>
        <SettingsIcon />
      </LinkReactRouter>

      <Logout />
    </MenuContent>
  );
};
export default DesktopNav;
