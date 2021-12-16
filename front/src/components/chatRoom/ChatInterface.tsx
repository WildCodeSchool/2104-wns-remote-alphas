/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
import { ApolloError, useMutation, useQuery } from '@apollo/client';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {
	GET_NEW_MESSAGE,
	POST_MESSAGE,
	GET_MESSAGES,
} from '../../utils/apollo';
import Context, { User } from '../context/Context';
import SendIcon from '../assets/icons/SendIcon';

interface IMessage {
	_id: string;
	text: string;
	author: User;
	sentAt: Date;
}

// CSS
const Container = styled.div`
	width: 100vw;
	height: 90vh;
	background-color: '#292929';
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div<{ isAuthor?: boolean }>`
	width: 70%;
	height: 70%;
	border: 1px solid #ecf3ff;
	text-align: center;
	overflow: scroll;
	background-color: ${(props) => props.theme.colors.opposite};
	// border-radius: 20px;
	box-shadow: 5px 5px 5px grey;
	display: flex;
	flex-direction: column;
	align-items: baseline;
`;

const Name = styled.div<{ isAuthor?: boolean }>`
	font-weight: ${(props) => props.isAuthor ? 600 : 400};
	display: flex;
	justify-content: left;
	align-items: center;
	color: grey;
	margin-top: 10px;
	margin-left: 8%;
	font-size: 0.8rem;
`;

const WrapperText = styled.div<{ isAuthor?: boolean }>`
	background-color: ${(props) => (props.isAuthor ? props.theme.colors.secondary : '#687385')};
	border: ${(props) =>
		props.isAuthor ? `1px solid ${(props.theme.colors.secondary)}` : '1px solid #c3c2c2'};
	max-width: 90%;
	height: fit-content;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 5%;
	border-radius: 20px;
	padding: 10px;
	padding-bottom: 10px;
	margin-top: 10px;
`;

const Text = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-align: left;
`;

const Datee = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	color: grey;
	width: 20vw;
	margin-top: 10px;
	margin-left: 8%;
	font-size: 0.6rem;
`;

const WrapperForm = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid black;
	height: 3.5rem;
	border-radius: 25px;
	outline: none;
	color: grey;
	background-color: white;
`;

const Form = styled.form`
	width: 70%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 1rem;
	text-align: center;
`;

const Input = styled.input`
	width: 100%;
	border: 1px solid white;
	height: 3rem;
	border-radius: 25px;
	outline: none;
	color: grey;
	fontsize: 1rem;
`;
const ButtonSend = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	width: 3rem;
	height: 2rem;
	margin-right: 2rem;
	cursor: pointer;
`;

const Box = styled.div<{ isAuthor?: boolean }>`
	align-self: ${(props) => (props.isAuthor ? 'flex-end' : 'flex-start')};
`;

function ChatInterface(): JSX.Element {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [bubble, setBubble] = useState<string>('');
	const { data, subscribeToMore } =
		useQuery<{ getMessages: IMessage[] }>(GET_MESSAGES);
	const { user } = useContext(Context);

	const [postMessageMutation] = useMutation<
		{ postMessage: IMessage },
		{ message: string }
	>(POST_MESSAGE);

	const messageEl = React.useRef<HTMLHeadingElement>(null);

	React.useEffect(() => {
		if (messageEl?.current) {
			messageEl.current.addEventListener('DOMNodeInserted', (event: Event) => {
				const { currentTarget } = event;

				if (currentTarget) {
					(currentTarget as HTMLDivElement).scroll({
						top: (currentTarget as HTMLDivElement).scrollHeight,
						behavior: 'smooth',
					});
				}
			});
		}
	}, [data]);

	React.useEffect(() => {
		if (data) {
			setMessages([...data.getMessages]);
		} else if (subscribeToMore) {
			subscribeToMore<{ newMessage: IMessage }>({
				document: GET_NEW_MESSAGE,
				updateQuery: (
					previous: { getMessages: IMessage[] },
					{
						subscriptionData: {
							data: { newMessage },
						},
					}
				) => ({
					getMessages: [...previous.getMessages, newMessage],
				}),
			});
		}
		// scrollToBottom();
	}, [data, subscribeToMore]);

	function handleChange(value: string) {
		setBubble(value);
	}
	async function handleSubmit() {
		try {
			const result = await postMessageMutation({
				variables: { message: bubble },
			});
			if (result.data?.postMessage) {
				setBubble('');
			}
		} catch (err) {
			if (err instanceof ApolloError) {
				throw new Error(err.message);
			}
		}
		setBubble('');
	}
	return (
		<Container>
			<Wrapper ref={messageEl}>
				{messages
					.sort((a, b) => (a.sentAt > b.sentAt ? 1 : -1))
					.map((item) => (
						<Box isAuthor={user.firstName === item.author.firstName} key={item._id}>
							<Name isAuthor={user.firstName === item.author.firstName}>
								<div>{item.author.firstName}</div>
							</Name>
							<WrapperText isAuthor={user.firstName === item.author.firstName}>
								<Text>{item.text}</Text>
							</WrapperText>
							<Datee>{new Date(item.sentAt).toLocaleDateString()}</Datee>
						</Box>
					))}
				{/* <div ref={messagesEndRef} style={{ height: '2px' }} /> */}
			</Wrapper>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}>
				<WrapperForm>
					<Input
						type="text"
						onChange={(e) => {
							handleChange(e.target.value);
						}}
						value={bubble}
					/>

					<ButtonSend type="submit">
						<SendIcon />
					</ButtonSend>
				</WrapperForm>
			</Form>
		</Container>
	);
}

export default ChatInterface;
