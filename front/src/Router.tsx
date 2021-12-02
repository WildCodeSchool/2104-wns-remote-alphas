import React, { useEffect, useState } from 'react';
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
import FormCourses from './components/backOffice/FormCourses';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Wiki from './components/Wiki';
import Help from './components/Help';
import VisitorHomePage from './components/VisitorHomePage';
import SingleCourse from './components/SingleCourse';
import Context, { User } from './components/context/Context';
import { ME } from './utils/apollo';

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
					}
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLogin, user]);

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
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
										<SettingsCard>
											<Profile />
										</SettingsCard>
									</Route>
									<Route exact path="/courses/:id">
										<SingleCourse />
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
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default Router;
