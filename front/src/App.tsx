import React from 'react';
import Header from './components/Header.styled';
import CardCourses from './CardCourses';

function App(): JSX.Element {
	return (
		<div className="App">
			<Header />
			<CardCourses />
		</div>
	);
}

export default App;
