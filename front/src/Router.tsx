import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout.styled';
import SettingsCard from './components/settings/SettingsCard.styled';
import Timeline from './components/Timeline.styled';

function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/">
						Home
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
						<SettingsCard />
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
