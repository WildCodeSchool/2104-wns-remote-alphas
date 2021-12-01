import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { LOGIN, ME } from '../../utils/apollo';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	margin-top: 5rem;
	margin-bottom: 5rem;
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
		<Wrapper style={{ backgroundColor: 'white' }}>
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
						type="password"
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
					<Button
						type="button"
						value="Envoyer"
						onClick={(e) => {
							e.preventDefault();
							handleSubmit();
						}}>
						Se connecter
					</Button>
					{errorState.status && (
						<ErrorMessage>{errorState.message}</ErrorMessage>
					)}
				</Form>
			</ContainForm>
			<LittleTitle>MOT DE PASSE OUBLIE</LittleTitle>
			<Line> </Line>
			<Title>Nouveau sur Masterize ? </Title>
			<LittleTitle
				style={{ color: '#2bb7f3', textDecoration: 'bold' }}
				onClick={() => {
					handleClick();
				}}>
				S&apos;INSCRIRE
			</LittleTitle>
		</Wrapper>
	);
}
