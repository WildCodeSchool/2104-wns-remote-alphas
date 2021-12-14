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

const Wrapper = styled.div`
	width: 70%;
	height: 70%;
	border: 1px solid #ecf3ff;
	text-align: center;
	overflow: scroll;
	background-color: #ecf3ff;
	// border-radius: 20px;
	box-shadow: 5px 5px 5px grey;
	display: flex;
	flex-direction: column;
	align-items: baseline;
`;

const Name = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	color: grey;
	margin-top: 10px;
	margin-left: 8%;
	font-size: 0.8rem;
`;

const WrapperText = styled.div<{ isAuthor?: boolean }>`
	background-color: ${(props) => (props.isAuthor ? '#58CE3D' : '#c3c2c2')};
	border: ${(props) =>
		props.isAuthor ? '1px solid #58CE3D' : '1px solid #c3c2c2'};

	width: 20vw;
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

const Form = styled.form`
	width: 70%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 1rem;
	text-align: center;
`;

const Input = styled.input`
	width: 100%;
	border: 1px solid black;
	height: 3rem;
	border-radius: 25px;
	outline: none;
	color: grey;
	fontsize: 1rem;
`;

function ChatInterface(): JSX.Element {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [bubble, setBubble] = useState<string>('');
	const { data, subscribeToMore } = useQuery(GET_MESSAGES);
	const { user } = useContext(Context);

	const [postMessageMutation] = useMutation<
		{ postMessage: IMessage },
		{ message: string }
	>(POST_MESSAGE);

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
			<Wrapper>
				{messages
					.sort((a, b) => (a.sentAt > b.sentAt ? 1 : -1))
					.map((item) => (
						<div key={item._id}>
							<Name>
								<div>{item.author.firstName}</div>
							</Name>
							<WrapperText isAuthor={user.firstName === item.author.firstName}>
								<Text>{item.text}</Text>
							</WrapperText>
							<Datee>{new Date(item.sentAt).toLocaleDateString()}</Datee>
						</div>
					))}
			</Wrapper>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}>
				<Input
					type="text"
					onChange={(e) => {
						handleChange(e.target.value);
					}}
					value={bubble}
				/>
				{/* <button style={{}} type="submit">
					Send
				</button> */}
			</Form>
		</Container>
	);
}

export default ChatInterface;