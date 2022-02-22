import { ApolloError, useMutation, useQuery } from '@apollo/client';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {
	GET_NEW_MESSAGE,
	POST_MESSAGE,
	GET_MESSAGES,
} from '../../utils/apollo';
import SendIcon from '../assets/icons/SendIcon';

import { MessageType } from '../../utils/types';

import Context from '../context/Context';
import MessageBubble from './components/MessageBubble.styled';
import {
	AuthorName,
	ButtonSend,
	ChatBox,
	ChatForm,
	FieldLabel,
	Input,
	MainContent
} from './components/Chat.styled';

const MessageBox = styled.div<{ isAuthor?: boolean }>`
	align-self: ${(props) => (props.isAuthor ? 'flex-end' : 'flex-start')};
	margin-right: ${(props) => (props.isAuthor ? '1.9rem' : '0rem')};
`;

function ChatInterface(): JSX.Element {
	const [messages, setMessages] = useState<MessageType[]>([]);
	const [bubble, setBubble] = useState<string>('');
	const { data, subscribeToMore } = useQuery<{ getMessages: MessageType[] }>(GET_MESSAGES);
	const { user } = useContext(Context);

	const [postMessageMutation] = useMutation<
		{ postMessage: MessageType },
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
			subscribeToMore<{ newMessage: MessageType }>({
				document: GET_NEW_MESSAGE,
				updateQuery: (
					previous: { getMessages: MessageType[] },
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
			if (bubble !== '') {
				const result = await postMessageMutation({
					variables: { message: bubble },
				});
				if (result.data?.postMessage) {
					setBubble('');
				}
			}
		} catch (err) {
			if (err instanceof ApolloError) {
				throw new Error(err.message);
			}
		}
		setBubble('');
	}
	return (
		<MainContent id="main-content">
			<ChatBox ref={messageEl} tabIndex={0}>
				{messages
					.sort((a, b) => (a.sentAt > b.sentAt ? 1 : -1))
					.map((item) => (
						<MessageBox
							isAuthor={user.firstName === item.author.firstName}
							key={item._id}>
							<AuthorName isAuthor={user.firstName === item.author.firstName}>
								<div>{item.author.firstName}</div>
							</AuthorName>
							<MessageBubble
								user={user}
								author={item.author}
								message={item.text}
								time={item.sentAt}
							/>
						</MessageBox>
					))}
				{/* <div ref={messagesEndRef} style={{ height: '2px' }} /> */}
			</ChatBox>
			<ChatForm
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}>
				<FieldLabel>
					Type your message
					<Input
						aria-label="type your message"
						type="text"
						onChange={(e) => {
							handleChange(e.target.value);
						}}
						value={bubble}
					/>
					<ButtonSend aria-label="send" type="submit">
						<SendIcon />
					</ButtonSend>
				</FieldLabel>
			</ChatForm>
		</MainContent>
	);
}

export default ChatInterface;
