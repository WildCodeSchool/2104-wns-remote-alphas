import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { LOGIN, ME } from '../../utils/apollo';
import { User } from '../../utils/types';
import AuthField from './AuthField';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: auto;
	width: 20%;
	height: calc(100vh - 113px - 105px);

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
const Title = styled.h1`
	font-size: ${(props) => props.theme.fontSize.s};
	text-align: center;
`;

const SubTitle = styled.h2`
	font-size: ${(props) => props.theme.fontSize.s};
`;

const LittleTitle = styled.p`
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
`;

const Line = styled.div`
	border: 0.01px solid grey;
	width: 70%;
`;

export default function SignInPage(): JSX.Element {
	const initialState = { email: '', password: '' };
	const initialErrorState = {
		status: false,
		message: '',
	};
	const [userLog, setUserLog] = useState(initialState);
	const [loginMutation] = useMutation<{ login: string }>(LOGIN);
	const [userMutation] = useMutation<{ me: User }>(ME);
	const history = useHistory();

	const [errorState, setErrorState] = useState(initialErrorState);

	const { setIsLogin, setUser } = useContext(Context);

	function handleClick() {
		history.push('/signup');
	}

	async function handleSubmit() {
		try {
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
				<Title>J&apos;ai déjà un compte Masterize</Title>
				<ContainForm>
					<Form>
						<AuthField
							label="email"
							type="email"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.email}
							placeholder="hello@masterize.com"
						/>
						<AuthField
							label="password"
							type="password"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.password}
							placeholder="supersecretpassword"
						/>

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
				<SubTitle>Nouveau sur Masterize ? </SubTitle>
				<LittleTitle
					style={{ color: '#2bb7f3', textDecoration: 'bold' }}
					onClick={() => {
						handleClick();
					}}>
					S&apos;INSCRIRE
				</LittleTitle>
			</FormContainer>
		</Wrapper>
	);
}
