import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import './index.css';
import Router from './Router';

// Set up Apollo Client
const client = new ApolloClient({
	uri: process.env.REACT_APP_API_DEV,
	cache: new InMemoryCache()
});

// todo: query API
// Get the 3 last courses for the homepage
client
	.query({
		query: gql`
      query GetCourses {
        getCourses(limit: "3") {
			id
			title
		  	description
		  	image
			tag
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
