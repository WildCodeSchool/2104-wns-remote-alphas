import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Logout(): JSX.Element {
    const history = useHistory();
	return (
        <button
         type="button"
            onClick={() => {
                /* App.logout().then(() => client.resetStore()); */
                localStorage.removeItem('token');
                history.push('/');
            }}>
            Logout
        </button>

    );
}
