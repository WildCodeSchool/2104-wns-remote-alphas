/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CTAButton from './core/buttons/CTAButton.styled';
import GradientBackground from './core/GradientBackground.styled';
import GradientTitle from './core/GradientTitle.styled';

/**
 * Default home page shown to the unknown visitors.
 */

const BoxCard = styled.main`
	background: #292929;
	padding: 3em;
	border-radius: 30px;
	width: 600px;
	margin: auto;
	alignItems: stretch;
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

const ButtonsRow = styled.div`
	display: flex;
	gap: 2em;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 1em;
`;

const Text = styled.text`
	color: white;
	text-align: center;
	align-content: center;
`;

function LandingPage(): JSX.Element {
	const history = useHistory();

	return (
		<GradientBackground>
			<BoxCard>
				<Container>
					<Image src="/assets/images/133725.png" aria-hidden alt="panda" />
				</Container>
				<GradientTitle>
					Masterize
				</GradientTitle>
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
				<ButtonsRow>
					<CTAButton
						type="button"
						onClick={() => {
							history.push('/signup');
						}}>
						Sign up
					</CTAButton>
					<CTAButton
						type="button"
						onClick={() => {
							history.push('/signin');
						}}>
						Log in
					</CTAButton>
				</ButtonsRow>
			</BoxCard>
		</GradientBackground>
	);
}

export default LandingPage;
