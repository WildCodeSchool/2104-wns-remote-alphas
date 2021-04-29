import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout.styled';

function Router(): JSX.Element {
	const { data } = useQuery(gql`
		query {
			getCourses {
				description
				technos
				courseName
				image_url
			}
		}
	`);
	if (data) console.log(data);
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/">
						Home
					</Route>
					<Route exact path="/courses">
						Courses
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
						Settings
					</Route>
					<Route exact path="/courses/:course">
						Courses/Course
					</Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default Router;
