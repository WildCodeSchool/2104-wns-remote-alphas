import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { User } from '../../utils/types';
import LogoutIcon from '../assets/icons/LogoutIcon';
import Context from '../context/Context';

/// Logout button
const Button = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: inherit;
  font-family: inherit;
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

export default function Logout(): JSX.Element {
  const history = useHistory();
  // eslint-disable-next-line object-curly-newline
  const { client, isLogin, setIsLogin, user, setUser } = useContext(Context);
  return (
    <Button
      type="button"
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          client?.cache.reset();
          localStorage.clear();

          if (isLogin) {
            setIsLogin(false);
          }
          if (user) {
            setUser({} as User);
          }

          history.push('/');
        }
      }}
      onClick={() => {
        client?.cache.reset();
        localStorage.clear();

        if (isLogin) {
          setIsLogin(false);
        }
        if (user) {
          setUser({} as User);
        }

        history.push('/');
      }}>
      <LogoutIcon />
    </Button>
  );
}
