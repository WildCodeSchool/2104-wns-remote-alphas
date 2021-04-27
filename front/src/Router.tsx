import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Router(): JSX.Element {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default Router;
