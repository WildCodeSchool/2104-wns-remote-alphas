import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import styled from 'styled-components';
import Context from '../context/Context';
import ErrorMessage from '../core/ErrorMessage';
import { ME, SIGNUP, LOGIN } from '../../utils/apollo';
/// Build styled components
const Wrapper = styled.div`
	display: flex;
	margin: auto;
	height: 100vh;
	width: 80vw;
	@media all and (min-width: 1000px) {
		width: 40vw;
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
	margin: auto;
	width: 100%;
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
	margin: auto;
	margin-top: 1rem;
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
			<FormContainer>
				<Title>Create an account</Title>
				<Subtitle>fill out this form to register on Masterize</Subtitle>
				<ContainForm>
					<Form>
						<Input
							type="text"
							name="name"
							placeholder="Name"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.name}
						/>
						<Input
							type="text"
							name="firstName"
							placeholder="First name"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.firstName}
						/>
						<Input
							type="text"
							name="email"
							placeholder="Email"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.email}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							onChange={(e) => {
								setUserLog({ ...userLog, [e.target.name]: e.target.value });
							}}
							value={userLog.password}
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
				</ContainForm>
				<Line />
				<LittleTitle onClick={() => handleClick()}>I already have an account</LittleTitle>
			</FormContainer>
		</Wrapper>
	);
}
