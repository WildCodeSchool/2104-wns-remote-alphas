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
import { Timeline } from './components/timeline/Timeline.styled';
import Home from './components/Home';
import SignInPage from './components/authentication/SignInPage';
import SignUpPage from './components/authentication/SignUpPage';
import Wiki from './components/wiki/Wiki';
import Help from './components/help/Help';
import VisitorHomePage from './components/VisitorHomePage';
import SingleCourse from './components/SingleCourse';
import Context, { User } from './components/context/Context';
import Settings from './components/settings/Settings';
import { ME } from './utils/apollo';
import FormCourses from './components/backOffice/FormCourses';
import Admin from './components/admin/Admin';

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
		connectToDevTools: process.env.NODE_ENV !== 'production',
	});

	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [user, setUser] = useState<User>({} as User);

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
				</ThemeProvider>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default Router;
