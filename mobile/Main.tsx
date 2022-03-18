import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from '../mobile';
//console.log("URI: ", uri);
const cache = new InMemoryCache();
// Create a instance of Apollo Client
const client = new ApolloClient({
  cache
});
const Main = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
export default Main;