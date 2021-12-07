/* eslint-disable operator-linebreak */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Row from './core/layout_parts/Row.styled';

/**
 * Default home page shown to the unknown visitors.
 */
export type CourseType = {
	_id: string;
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
};

const AppContent = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 50px 0px;
`;

const Card = styled.div`
	width: 15%;
	background-color: ${(props) => props.theme.colors.quaterny};
	padding: ${(props) => props.theme.padding.s};
	margin: auto;
	border-radius: ${(props) => props.theme.fixedSize.borderRadius};
	box-shadow: ${(props) => props.theme.fixedSize.boxShadow};
`;

const Title = styled.div`
	text-align: center;
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => props.theme.fontSize.l};
`;

const ThemeCourse = styled.div`
	text-align: center;
	color: '${(props) => props.theme.colors.altTextColor}';
	font-size: ${(props) => props.theme.fontSize.xxs};
	text-align: left;
	border-radius: 10%;
	width: min-content;
`;

const Container = styled.div`
	margin: ${(props) => props.theme.margin.imageCard};
`;

const Image = styled.img`
	width: 100%;
`;

const Line = styled.hr`
	width: 100%;
`;
const LinkReactRouter = styled(Link)`
	text-decoration: none;
	color: white;
	cursor: pointer;
	&:hover {
		color:${(props) => props.theme.colors.secondary};
		text-decoration: underline;
	}
	&:focus {
		color: ${(props) => props.theme.colors.secondary};
		text-decoration: underline;
		outline: none;
	}
`;

const fakeObjectsForVisitorPage = [
	{
		description: 'The best course to discover Flutter',
		technos: ['mobile', 'flutter'],
		courseName: 'Flutter',
		image_url: 'https://picsum.photos/300/200?random=1',
		_id: '6184f1a80f8bc700254a4a82',
	},
	{
		description: 'The best course to discover React',
		technos: ['dev', 'react'],
		courseName: 'React',
		image_url: 'https://picsum.photos/300/200?random=1',
		_id: '6184f1a80f8bc700254a4a89',
	},
	{
		description: 'The best course to discover Angular',
		technos: ['dev', 'angular'],
		courseName: 'Angular',
		image_url: 'https://picsum.photos/300/200?random=1',
		_id: '6184f1a80f8bc700254a4a84',
	},
];

function VisitorHomePage(): JSX.Element {
	return (
		<AppContent>
			<div>
				<h1 style={{ color: '#68d0fc', textAlign: 'center' }}>
					Bienvenue sur Masterize
				</h1>
				<br />
				<h2 style={{ color: 'white', textAlign: 'center' }}>
					La meilleure plateforme de cours en ligne pour apprendre le code.
				</h2>
				<h3 style={{ color: 'white', textAlign: 'center' }}>
					Pas encore de compte ?
					<LinkReactRouter to="/signup">
						{'   '}
						Je m&apos;inscris et je deviens Dev senior freelance 600 euros /
						jour en moins de 7 jours.
					</LinkReactRouter>
				</h3>
			</div>
			<CardContainer data-testid="container-visitor-page">
				{fakeObjectsForVisitorPage.map((item: CourseType) => (
					<Card key={item.courseName}>
						<Title data-testid="title-secondary-card">{item.courseName}</Title>
						<Container>
							<Image src={item.image_url} alt={item.description} />
						</Container>
						<Line />
						<Row gap="10px">
							{item?.technos.length > 0 &&
								item.technos.map((techno) => (
									<ThemeCourse aria-label="tag">{techno}</ThemeCourse>
								))}
						</Row>
					</Card>
				))}
			</CardContainer>
		</AppContent>
	);
}

export default VisitorHomePage;
