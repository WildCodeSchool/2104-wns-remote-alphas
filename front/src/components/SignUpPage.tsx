import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';
import { LOGIN } from './SignInPage';

const Wrapper = styled.div`
	display: flex;
	//justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: auto;
	//margin-top: 5rem;
	//margin-bottom: 5rem;
	width: 20%;
	height: 100%;
	border: 1px solid black;
	border-radius: 12px;
	box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px;

	@media screen and (max-width: 780px) {
		width: 95%;
	}
	@media all and (min-width: 790px) and (max-width: 1280px) {
		width: 50%;
	}
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
	//margin: auto;
`;

const SIGNUP = gql`
	mutation signup(
		$name: String!
		$firsName: String!
		$email: String!
		$password: String!
	) {
		signup(
			user: {
				name: $name
				firstName: $firstName
				email: $email
				password: $password
			}
		) {
			_id
		}
	}
`;

export default function SignUpPage(): JSX.Element {
	const initialState = {
		lastname: '',
		firstName: '',
		email: '',
		password: '',
	};
	const [userLog, setUserLog] = useState(initialState);
	const [signupMutation, { error }] = useMutation(SIGNUP);
	const [loginMutation] = useMutation(LOGIN);
	const history = useHistory();

	if (error) return <p>Error :(</p>;

	function handleClick() {
		history.push('/signin');
	}

	async function handleSubmit() {
		const {
			data: { signup },
		} = await signupMutation({
			variables: {
				name: userLog.lastname,
				firstName: userLog.firstName,
				email: userLog.email,
				password: userLog.password,
			},
		});
		// eslint-disable-next-line no-underscore-dangle
		if (signup) {
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
				history.push('/');
			} else {
				console.log('serveur error');
			}
		} else {
			setUserLog(initialState);
		}
	}

	return (
		<Wrapper style={{ backgroundColor: 'white' }}>
			<Title>Nouveau sur Masterize</Title>
			<p>Saisissez vos informations personnelles</p>
			<ContainForm>
				<Form>
					<Input
						type="text"
						name="lastname"
						placeholder="Nom"
						onChange={(e) => {
							setUserLog({ ...userLog, [e.target.name]: e.target.value });
						}}
						value={userLog.lastname}
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
				</Form>
			</ContainForm>
			<Line> </Line>
			<Title>Déjà un compte Masterize</Title>
			<LittleTitle onClick={() => handleClick()}>SE CONNECTER</LittleTitle>
		</Wrapper>
	);
}
