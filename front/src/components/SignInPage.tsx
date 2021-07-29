import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	//justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: auto;
	margin-top: 5rem;
	margin-bottom: 5rem;
	width: 30%;
	height: 65vh;
	border: 1px solid black;
	border-radius: 12px;
	box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px;

	@media screen and (max-width: 780px) {
		width: 95%;
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

// const titleSignIn = styled.h3`
// 	display: flex;
// 	justify-content: 'center';
// `;

const Input = styled.input`
	margin: auto;
	width: 85%;
	height: 2.5rem;
	border: 1px solid grey;
	border-radius: 5px;
	font-size: 1rem;
`;

const ContainCheckBox = styled.div`
	width: 85%;
	display: flex;
	justify-content: flex-start;
	margin: auto;
`;

const CheckBox = styled.input`
	cursor: pointer;
`;
const LabelForCheck = styled.label``;

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
	:hover {
		text-decoration: underline;
	}
`;

const Line = styled.div`
	border: 0.01px solid grey;
	width: 70%;
	//margin: auto;
`;

const LOGIN = gql`
	
	mutation login {
		
	}
`;

export default function SignInPage(): JSX.Element {
	const [userLog, setUserLog] = useState({ email: '', password: '' });

	const history = useHistory();

	function handleClick() {
		history.push('/signup');
	}
	return (
		<Wrapper>
			<Title>J&apos;ai déjà un compte Masterize</Title>
			<ContainForm>
				<Form>
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
						type="text"
						name="password"
						placeholder="Mot de passe"
						onChange={(e) => {
							setUserLog({ ...userLog, [e.target.name]: e.target.value });
						}}
						value={userLog.password}
					/>
					<ContainCheckBox>
						<CheckBox
							type="checkbox"
							id="remember-password"
							name="remember-password"
						/>
						<LabelForCheck>Se Souvenir de mon identifiant</LabelForCheck>
					</ContainCheckBox>
					<Button type="submit" value="Envoyer">
						Se connecter
					</Button>
				</Form>
			</ContainForm>
			<LittleTitle>MOT DE PASSE OUBLIE</LittleTitle>
			<Line> </Line>
			<Title>Nouveau sur Masterize ? </Title>
			<LittleTitle
				style={{ color: '#2bb7f3', textDecoration: 'bold' }}
				onClick={() => {
					handleClick();
					// eslint-disable-next-line react/jsx-closing-bracket-location
				}}>
				S&apos;INSCRIRE
			</LittleTitle>
		</Wrapper>
	);
}
