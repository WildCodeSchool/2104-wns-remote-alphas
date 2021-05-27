import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';
import Router from './Router';

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_DEV,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
