import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import './index.css';
import Router from './Router';

// todo: set a constant API uri in a .env file
const client = new ApolloClient({
	uri: process.env.REACT_APP_API_DEV,
	cache: new InMemoryCache()
});

// todo: query API
client
	.query({
		query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
	})
	.then((result) => console.log(result));

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
