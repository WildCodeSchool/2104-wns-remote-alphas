import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import client from '../utils/apolloclient';

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
    const token = localStorage.getItem('token');
/*     const USER = gql`
    `; */
    const history = useHistory();
	return (
        <Button
         type="button"
            onClick={() => {
                /* client.cache.evict({ token: token }); */
                /* client.cache.gc(); */
                /* App.logout().then(() => client.resetStore()); */
                localStorage.removeItem('token');
                history.push('/signin');
            }}>
            Logout
        </Button>

    );
}
