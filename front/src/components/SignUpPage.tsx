import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
	//height: 45%;
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

export default function SignUpPage(): JSX.Element {
	const [userLog, setUserLog] = useState({
		name: '',
		firstname: '',
		email: '',
		password: '',
	});

	const history = useHistory();

	function handleClick() {
		history.push('/signin');
	}

	return (
		<Wrapper>
			<Title>Nouveau sur Masterize</Title>
			<p>Saisissez vos informations personnelles</p>
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
						name="firstname"
						placeholder="Prénom"
						onChange={(e) => {
							setUserLog({ ...userLog, [e.target.name]: e.target.value });
						}}
						value={userLog.firstname}
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
					<Button type="submit" value="s'enregistrer">
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
