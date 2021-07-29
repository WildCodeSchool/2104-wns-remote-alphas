import React from 'react';
import ReactDOM from 'react-dom';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './index.css';
import Router from './Router';

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_API_DEV,
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token');
	return {
		headers: {
			...headers,
			authorization: token,
		},
	};
});

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_DEV,
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
