import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.div`
	background-color: #292929;
`;

const Header = (): JSX.Element => (
	<HeaderContent>
		<div className="title-content">
			<div>Logo</div>
			<div>title</div>
		</div>
		<div className="menu-content">
			<nav>
				<ul>
					<li>Home</li>
					<li>Courses</li>
					<li>Wiki</li>
					<li>Help</li>
					<button type="button">Chat Now</button>
				</ul>
			</nav>
		</div>
	</HeaderContent>
);

export default Header;
