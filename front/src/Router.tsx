/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect, useState } from 'react';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
	split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DarkTheme, ThemeProvider } from 'styled-components';
import { getMainDefinition } from '@apollo/client/utilities';
import darkTheme from './theme/darkTheme';
import Layout from './components/templates/Layout.styled';
import { Timeline } from './components/timeline/Timeline.styled';
import Home from './components/Home';
import SignInPage from './components/authentication/SignInPage';
import SignUpPage from './components/authentication/SignUpPage';
import Wiki from './components/wiki/Wiki';
import Help from './components/help/Help';
import VisitorHomePage from './components/VisitorHomePage';
import SingleCourse from './components/SingleCourse';
import ChatInterface from './components/chatRoom/ChatInterface';
import Context, { User } from './components/context/Context';
import Settings from './components/settings/Settings';
import { ME } from './utils/apollo';
import FormCourses from './components/backOffice/FormCourses';
import Admin from './components/admin/Admin';
import ThemeUpdateContext from './components/context/ThemeUpdateContext';

function Router(): JSX.Element {
	const httpLink = createHttpLink({
		uri:
			process.env.NODE_ENV === 'production'
				? '/graphql'
				: process.env.REACT_APP_API_DEV,
	});

	const wsLink = new WebSocketLink({
		uri:
			process.env.NODE_ENV === 'production'
				? 'wss://les-alphas.wns.wilders.dev/subscriptions'
				: 'ws://localhost:8080',

		options: {
			reconnect: true,
			timeout: 30000,
		},
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

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			);
		},
		wsLink,
		authLink.concat(httpLink)
	);

	const client = new ApolloClient({
		uri: process.env.REACT_APP_API_DEV,
		cache: new InMemoryCache(),
		link: splitLink,
		connectToDevTools: process.env.NODE_ENV !== 'production',
	});

	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [user, setUser] = useState<User>({} as User);
	const [userTheme, setUserTheme] = useState(darkTheme);

	const updateTheme = useCallback(
		(changes: Partial<DarkTheme>) => {
			setUserTheme({ ...userTheme, ...changes });
		},
		[userTheme, setUserTheme]
	);

	useEffect(() => {
		const isValidToken = localStorage.getItem('token');
		setIsLogin(!!isValidToken);
		if (!user || !user._id) {
			const res = localStorage.getItem('user');
			if (res) {
				const userData = JSON.parse(res);
				setUser(userData);
			} else if (isValidToken) {
				client.mutate({ mutation: ME }).then((result) => {
					if (result) {
						const {
							data: { me },
						} = result;
						setUser(me);
						localStorage.setItem('user', JSON.stringify(me));
					}
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLogin, user]);

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<ThemeProvider theme={userTheme}>
					<ThemeUpdateContext.Provider value={updateTheme}>
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
											<Route exact path="/wiki">
												<Wiki />
											</Route>
											<Route exact path="/help">
												<Help />
											</Route>
											<Route exact path="/chat">
												Chat
											</Route>
											<Route exact path="/timeline-courses">
												Timeline-courses
											</Route>
											<Route exact path="/settings">
												<Settings />
											</Route>
											<Route exact path="/courses/:id">
												<SingleCourse />
											</Route>
											<Route exact path="/chatRoom">
												<ChatInterface />
											</Route>
											{(user?.role === 'teacher' || user?.role === 'admin') && (
												<Route exact path="/backoffice">
													<FormCourses />
												</Route>
											)}
											{user?.role === 'admin' && (
												<Route exact path="/admin">
													<Admin />
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
					</ThemeUpdateContext.Provider>
				</ThemeProvider>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default Router;
