/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Default home page shown to the unknown visitors.
 */
const AppContent = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
	height: 100vh;
	background: linear-gradient(270deg, #10dfd7, #5adf10, #e9ee2a, #ee822a, #ee462a, #ee2a99, #ee2ae7, #9f2aee, #512aee, #2a7cee, #2ab0ee);
	background-size: 2200% 2200%;
	
	-webkit-animation: HueRotate 46s ease infinite;
	-moz-animation: HueRotate 46s ease infinite;
	animation: HueRotate 46s ease infinite;
	
	
	@-webkit-keyframes HueRotate {
		0%{background-position:0% 72%}
		50%{background-position:100% 29%}
		100%{background-position:0% 72%}
	}
	@-moz-keyframes HueRotate {
		0%{background-position:0% 72%}
		50%{background-position:100% 29%}
		100%{background-position:0% 72%}
	}
	@keyframes HueRotate {
		0%{background-position:0% 72%}
		50%{background-position:100% 29%}
		100%{background-position:0% 72%}
	}
`;

const BoxCard = styled.main`
	background: #292929;
	padding: 3em;
	border-radius: 30px;
	width: 600px;
	margin: auto;
	alignItems: stretch;
`;

const Title = styled.h1`
	text-align: center;
	color: ${(props) => props.theme.colors.secondary};
	font-size: 60px;
	margin: 5px;
`;

const Container = styled.div`
	margin: ${(props) => props.theme.margin.imageCard};
	margin-top: 50px;
	width: 200px;
	margin: auto;
`;

const Image = styled.img`
	width: 200px;
`;

const LinkReactRouter = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.colors.secondary};
	cursor: pointer;
	&:hover {
		color:${(props) => props.theme.colors.secondary};
		text-decoration: underline;
	}
	&:focus {
		color: ${(props) => props.theme.colors.secondary};
		text-decoration: underline;
		outline: none;
	}
`;

const Text = styled.text`
	color: white;
	text-align: center;
	align-content: center;
`;

function LandingPage(): JSX.Element {
	return (
		<AppContent>
			<BoxCard>
				<Container>
					<Image src="/assets/images/133725.png" aria-hidden />
				</Container>
				<Title>
					Discover Masterize
				</Title>
				<h2 style={{ color: 'white', textAlign: 'center' }}>
					The inclusive learning platform for remote classes.
				</h2>
				<Text>
					Ensuring equal access to education and training is essential.
					This is why we have built Masterize, a digitally accessible platform for all users, including those with disabilities, that makes remote learning easier and more comfortable for everyone.
				</Text>
				<br />
				<br />
				<Text>
					We ensure that our learning platform is fully accessible to evey user, regardless of their disabilities. Being compliant to the highest grade of accessibility in the WCAG makes the app compatible with common accessibility tools.
				</Text>
				<br />
				<br />
				<Text>
					<LinkReactRouter to="/signup">
						Sign up today and join your training classmates,
					</LinkReactRouter>
					&nbsp;
					or
					&nbsp;
					<LinkReactRouter to="/signin">
						log in your account.
					</LinkReactRouter>
				</Text>
			</BoxCard>
		</AppContent>
	);
}

export default LandingPage;
