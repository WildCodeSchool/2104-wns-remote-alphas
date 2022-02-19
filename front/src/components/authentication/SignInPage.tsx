import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { LOGIN, ME } from '../../utils/apollo';
import AuthField from './AuthField';
import FormCard from './components/FormCard.styled';
import Wrapper from './components/Wrapper.styled';
import FormContainer from './components/FormContainer.styled';
import Form from './components/Form.styled';
import Divider from '../core/Divider.styled';

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
		<Wrapper>
			<FormCard>
			<Title>J&apos;ai déjà un compte Masterize</Title>
			<FormContainer>
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
			</FormContainer>
			<LittleTitle>MOT DE PASSE OUBLIE</LittleTitle>
			<Divider style={{ width: '70%' }} />
			<SubTitle>Nouveau sur Masterize ? </SubTitle>
			<LittleTitle
				style={{ color: '#2bb7f3', textDecoration: 'bold' }}
				onClick={() => {
					handleClick();
				}}>
				S&apos;INSCRIRE
			</LittleTitle>

			</FormCard>
		</Wrapper>
	);
}
