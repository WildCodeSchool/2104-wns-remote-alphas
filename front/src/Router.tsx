import React, { useEffect, useState } from 'react';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import darkTheme from './theme/darkTheme';
import Layout from './components/templates/Layout.styled';
import SettingsCard from './components/settings/SettingsCard.styled';
import Profile from './components/settings/settings_sections/Profile.styled';
import { Timeline } from './components/timeline/Timeline.styled';
import Home from './components/Home';
import FormCourses from './components/backOfffice/FormCourses';
import SignInPage from './components/authentication/SignInPage';
import SignUpPage from './components/authentication/SignUpPage';
import VisitorHomePage from './components/VisitorHomePage';

import Context, { User } from './components/context/Context';

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

	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [user, setUser] = useState<User>({} as User);

	useEffect(() => {
		const isValidToken = localStorage.getItem('token');
		setIsLogin(!!isValidToken);
	}, [isLogin]);

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<ThemeProvider theme={darkTheme}>
					<Context.Provider
						value={{
							client,
							isLogin,
							setIsLogin,
							user,
							setUser,
						}}>
						<Layout>
							<Switch>
								<Route exact path="/signin">
									<SignInPage />
								</Route>
								<Route exact path="/signup">
									<SignUpPage />
								</Route>
								{isLogin ? (
									<>
										<Route exact path="/">
											<Home />
										</Route>
										<Route exact path="/courses">
											<Timeline />
										</Route>
										{/* <Route exact path="/wiki">
										Wiki
									</Route> */}
										{/* <Route exact path="/help">
										Help
									</Route> */}
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
										{user?.role === 'teacher' && (
											<Route exact path="/backOffice">
												<FormCourses />
											</Route>
										)}
									</>
								) : (
									<Route exact path="/">
										<VisitorHomePage />
									</Route>
								)}
							</Switch>
						</Layout>
					</Context.Provider>
				</ThemeProvider>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default Router;
