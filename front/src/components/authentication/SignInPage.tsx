import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { LOGIN, ME } from '../../utils/apollo';
import AuthField from './components/AuthField.styled';
import FormCard from './components/FormCard.styled';
import Wrapper from './components/Wrapper.styled';
import FormContainer from './components/FormContainer.styled';
import Form from './components/Form.styled';
import Divider from '../core/Divider.styled';
import Button from './components/Button.styled';
import H1 from './components/typos/H1.styled';
import H2 from './components/typos/H2.styled';
import TextLink from './components/typos/TextLink.styled';
import GradientBackground from '../core/GradientBackground.styled';
import TextButton from '../core/buttons/TextButton.styled';

export default function SignInPage(): JSX.Element {
	const initialState = { email: '', password: '' };
	const initialErrorState = {
		status: false,
		message: '',
	};
	const [userLog, setUserLog] = useState(initialState);
	const [loginMutation] = useMutation(LOGIN);
	const [userMutation] = useMutation(ME);
	const history = useHistory();

	const [errorState, setErrorState] = useState(initialErrorState);

	const { setIsLogin, setUser } = useContext(Context);

	function handleClick() {
		history.push('/signup');
	}

	async function handleSubmit() {
		try {
			const {
				data: { login },
			} = await loginMutation({
				variables: {
					email: userLog.email,
					password: userLog.password,
				},
			});

			if (typeof login === 'string') {
				localStorage.setItem('token', login);

				if (setIsLogin) {
					setIsLogin(true);
				}
				const {
					data: { me },
				} = await userMutation({});

				if (me._id) {
					setUser({ ...me });
					localStorage.setItem('user', JSON.stringify(me));
				}
				history.push('/');
			} else {
				setUserLog(initialState);
			}
		} catch (err) {
			if (err instanceof ApolloError) {
				setErrorState({ message: err.message, status: true });
			}
		}
	}
	return (
		<GradientBackground>
			<Wrapper>
				<FormCard>
					<H1>I have an account</H1>
					<FormContainer>
						<Form>
							<AuthField
								name="email"
								label="Email"
								type="email"
								onChange={(e) => {
									setUserLog({ ...userLog, [e.target.name]: e.target.value });
								}}
								value={userLog.email}
								placeholder="hello@masterize.com"
							/>
							<AuthField
								name="password"
								label="Password"
								type="password"
								onChange={(e) => {
									setUserLog({ ...userLog, [e.target.name]: e.target.value });
								}}
								value={userLog.password}
								placeholder="supersecretpassword"
							/>
							<Button
								type="submit"
								value="Log in"
								onClick={(e) => {
									e.preventDefault();
									handleSubmit();
								}}>
								Go to my classroom
							</Button>
							{errorState.status && (
								<ErrorMessage>{errorState.message}</ErrorMessage>
							)}
						</Form>
					</FormContainer>
					<TextButton>Gosh, I forgot my password 😱</TextButton>
					<Divider style={{ width: '70%' }} />
					<TextButton
						accent
						onClick={() => {
							handleClick();
						}}>
						I dont have any account, sign me up right now !
					</TextButton>

				</FormCard>
			</Wrapper>
		</GradientBackground>
	);
}
