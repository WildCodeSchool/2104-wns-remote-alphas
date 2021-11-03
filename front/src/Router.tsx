import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout.styled';
import SettingsCard from './components/settings/SettingsCard.styled';
import Profile from './components/settings/settings_sections/Profile.styled';
import { Timeline } from './components/Timeline.styled';
import Home from './Home';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

function Router(): JSX.Element {
	const httpLink = createHttpLink({
		uri:
			process.env.NODE_ENV === 'production'
				? '/graphql'
				: process.env.REACT_APP_API_DEV,
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

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/signin">
							<SignInPage />
						</Route>
						<Route exact path="/signup">
							<SignUpPage />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/courses">
							<Timeline />
						</Route>
						<Route exact path="/wiki">
							Wiki
						</Route>
						<Route exact path="/help">
							Help
						</Route>
						<Route exact path="/chat">
							Chat
						</Route>
						<Route exact path="/timeline-courses">
							Timeline-courses
						</Route>
						<Route exact path="/settings">
							<SettingsCard>
								<Profile />
							</SettingsCard>
						</Route>
						<Route exact path="/courses/:course">
							Courses/Course
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default Router;
