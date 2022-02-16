import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { ME, SIGNUP, LOGIN } from '../../utils/apollo';
import { User } from '../../utils/types';
/// Build styled components
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: auto;
	height: calc(100vh - 113px - 105px);
	width: 20%;

	@media screen and (max-width: 780px) {
		width: 95%;
	}
	@media all and (min-width: 790px) and (max-width: 1280px) {
		width: 50%;
	}
`;

const FormContainer = styled.div`
	background-color: white;
	border: 1px solid black;
	border-radius: 12px;
	box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 14px;
`;

const ContainForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 45%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

const Input = styled.input`
	margin: auto;
	width: 85%;
	height: 2.5rem;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
`;

const Button = styled.button`
	margin: auto;
	width: 85%;
	height: 2.5rem;
	cursor: pointer;
	border-radius: 5px;
	color: white;
	border: 1px solid #68d0fc;
	background-color: #68d0fc;
	font-size: 1rem;
	:hover {
		background-color: #2bb7f3;
		border-color: #2bb7f3;
	}
`;
const Title = styled.h3``;

const Subtitle = styled.p`
	text-align: center;
`;

const LittleTitle = styled.h4`
	cursor: pointer;
	color: #2bb7f3;
	text-decoration: bold;
	:hover {
		text-decoration: underline;
	}
`;

const Line = styled.div`
	border: 0.01px solid grey;
	width: 70%;
	margin-top: 2rem;
	margin: auto;
`;

/// View
export default function SignUpPage(): JSX.Element {
	const initialState = {
		name: '',
		email: '',
		firstName: '',
		password: '',
	};
	const initialErrorState = {
		status: false,
		message: '',
	};
	const [userLog, setUserLog] = useState(initialState);
	const [errorState, setErrorState] = useState(initialErrorState);
	const [signupMutation] = useMutation<{ signup: User }>(SIGNUP);
	const [loginMutation] = useMutation<{ login: string }>(LOGIN);
	const [userMutation] = useMutation<{ me: User }>(ME);
	const history = useHistory();

	const { setIsLogin, setUser } = useContext(Context);

	function handleClick() {
		history.push('/signin');
	}

	async function handleSubmit() {
		try {
			const signupResult = await signupMutation({
				variables: {
					...userLog,
				},
			});
			if (signupResult.data?.signup) {
				const loginResult = await loginMutation({
					variables: {
						email: userLog.email,
						password: userLog.password,
					},
				});
				if (typeof loginResult.data?.login === 'string') {
					localStorage.setItem('token', loginResult.data.login);

					if (setIsLogin) {
						setIsLogin(true);
					}

					const meResult = await userMutation({});

					if (meResult.data?.me._id) {
						setUser({ ...meResult.data.me });
						localStorage.setItem('user', JSON.stringify(meResult.data.me));
					}
					history.push('/');
				} else {
					setErrorState({
						message: 'Oops something went wrong, try again',
						status: true,
					});
				}
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
		<Wrapper>
			<FormContainer>
				<Title>Nouveau sur Masterize</Title>
				<Subtitle>Saisissez vos informations personnelles</Subtitle>
				<ContainForm>
					<Form>
						<Input
							type="text"
							name="name"
							placeholder="Nom"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.name}
						/>
						<Input
							type="text"
							name="firstName"
							placeholder="Prénom"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.firstName}
						/>
						<Input
							type="text"
							name="email"
							placeholder="Adresse email"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.email}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Mot de passe"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.password}
						/>
						<Button
							type="button"
							value="s'enregistrer"
							onClick={(e) => {
								e.preventDefault();
								handleSubmit();
							}}>
							S&apos;inscrire
						</Button>
						{errorState.status && (
							<ErrorMessage>{errorState.message}</ErrorMessage>
						)}
					</Form>
				</ContainForm>
				<Line> </Line>
				<Title>Déjà un compte Masterize</Title>
				<LittleTitle onClick={() => handleClick()}>SE CONNECTER</LittleTitle>
			</FormContainer>
		</Wrapper>
	);
}
