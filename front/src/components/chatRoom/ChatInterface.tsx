import React, { useEffect, useState, useContext } from 'react';
import Context from '../context/Context';

interface Data {
	_id: number;
	text: string;
	createdAt: any;
	user: any;
}

export interface IUserData {
	firstName?: string;
	name?: string;
	email?: string;
	location?: string;
}

function ChatInterface(): JSX.Element {
	const [text, setText] = useState('');
	const [bubble, setBubble] = useState<Data[]>([]);

	const { user } = useContext(Context);
	const [userData, setUserData] = useState<IUserData>(user);

	useEffect(() => {
		setBubble([
			{
				_id: 1,
				text: 'Bonjour Anthony comment ça va ?',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'Samuel',
				},
			},
			// {
			// 	_id: 1,
			// 	text: '100K Mini sale pute',
			// 	createdAt: new Date(),
			// 	user: {
			// 		_id: 2,
			// 		name: 'Victor',
			// 	},
			// },
		]);
	}, []);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setText(e.target.value);
	}
	function handleSubmit(): void {
		setBubble([
			...bubble,
			{
				_id: 2,
				text,
				createdAt: new Date(),
				user: {
					_id: 3,
					name: userData.firstName,
				},
			},
		]);
		console.log('text', text);
		console.log('bubble', bubble);
		console.log('user', user);
		console.log('userData', userData);
		setText('');
	}
	return (
		<div
			className="container"
			style={{
				width: '100vw',
				height: '90vh',
				backgroundColor: '#292929',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div
				className="wrapper-interface"
				style={{
					width: '70%',
					height: '70%',
					border: '1px solid #ECF3FF',
					textAlign: 'center',
					overflow: 'scroll',
					backgroundColor: '#ECF3FF',
					borderRadius: '20px',
					boxShadow: '5px 5px 5px grey',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'baseline',

					// margin: 'auto',
				}}>
				{bubble.map((item) => (
					<>
						<div
							style={{
								display: 'flex',
								justifyContent: 'left',
								alignItems: 'center',
								color: 'grey',
								marginTop: '10px',
								marginLeft: '8%',
								fontSize: '0.8rem',
								// padding: '10px',
							}}>
							<div>{item.user.name}</div>
						</div>
						<div
							style={{
								backgroundColor:
									userData.firstName === item.user.name ? '#58CE3D' : '#c3c2c2',
								width: '20vw',
								// height: '3rem',
								border:
									userData.firstName === item.user.name
										? '1px solid #58CE3D'
										: ' 1px solid #c3c2c2',
								color: 'white',
								display: 'flex',
								justifyContent: 'left',
								alignItems: 'center',
								marginLeft: '5%',
								borderRadius: '20px',
								padding: '10px',
								paddingBottom: '10px',
								marginTop: '10px',
							}}>
							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									textAlign: 'left',
								}}>
								{item.text}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'end',
								alignItems: 'center',
								color: 'grey',
								width: '20vw',
								marginTop: '10px',
								marginLeft: '8%',
								fontSize: '0.6rem',
								// padding: '10px',
							}}>
							{item.createdAt.toLocaleDateString()}
						</div>
					</>
				))}
			</div>
			<form
				style={{
					width: '70%',
					marginRight: 'auto',
					marginLeft: 'auto',
					marginTop: '1rem',
					textAlign: 'center',
				}}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}>
				<input
					style={{
						width: '100%',
						border: '1px solid black',
						height: '3rem',
						borderRadius: '25px',
						outline: 'none',
						color: 'grey',
						fontSize: '1rem',
					}}
					type="text"
					onChange={(e) => {
						handleChange(e);
					}}
					value={text}
				/>
				{/* <button style={{}} type="submit">
					Send
				</button> */}
			</form>
		</div>
	);
}

export default ChatInterface;
