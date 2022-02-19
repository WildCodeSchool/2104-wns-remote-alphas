import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { ME, SIGNUP, LOGIN } from '../../utils/apollo';
import Wrapper from './components/Wrapper.styled';
import FormCard from './components/FormCard.styled';
import FormContainer from './components/FormContainer.styled';
import Form from './components/Form.styled';
import Divider from '../core/Divider.styled';
import AuthField from './AuthField';

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

/// View
export default function SignUpPage(): JSX.Element {
	const initialState = {
		name: '',
		email: '',
		firstName: '',
		password: '',
		roles: ['student'],
	};
	const initialErrorState = {
		status: false,
		message: '',
	};
	const [userLog, setUserLog] = useState(initialState);
	const [errorState, setErrorState] = useState(initialErrorState);
	const [signupMutation] = useMutation(SIGNUP);
	const [loginMutation] = useMutation(LOGIN);
	const [userMutation] = useMutation(ME);
	const history = useHistory();

	const { setIsLogin, setUser } = useContext(Context);

	function handleClick() {
		history.push('/signin');
	}

	async function handleSubmit() {
		try {
			const result = await signupMutation({
				variables: {
					...userLog,
				},
			});
			if (result.data.signup) {
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
			<FormCard>
				<Title>Create an account</Title>
				<Subtitle>fill out this form to register on Masterize</Subtitle>
				<FormContainer>
					<Form>
						<AuthField
							label="Fistname"
							type="text"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.name}
							placeholder="Jane"
						/>
						<AuthField
							label="Name"
							type="text"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.name}
							placeholder="Doe"
						/>
						<AuthField
							label="Email"
							type="email"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.name}
							placeholder="jane.doe@domain.com"
						/>
						<AuthField
							label="Password"
							type="password"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.name}
							placeholder="********"
						/>
						<Button
							type="button"
							value="Sign up"
							onClick={(e) => {
								e.preventDefault();
								handleSubmit();
							}}>
							Sign up
						</Button>
						{errorState.status && (
							<ErrorMessage>{errorState.message}</ErrorMessage>
						)}
					</Form>
				</FormContainer>
				<Divider style={{ width: '70%', marginTop: '1.5em' }} />
				<LittleTitle onClick={() => handleClick()}>I already have an account</LittleTitle>
			</FormCard>
		</Wrapper>
	);
}
