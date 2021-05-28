import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { waitFor, screen, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_COURSES_QUERY, Timeline } from '../components/Timeline.styled';

const mocks = [
	{
		request: {
			query: GET_COURSES_QUERY,
		},
		result: {
			data: {
				getCourses: [
					{
						description: 'best mock courses',
						courseName: 'MockMock',
						image_url: 'https://picsum.photos/seed/picsum/400',
						technos: ['react', 'apollo client'],
					},
				],
			},
		},
	},
];

it('should return loading when data is not load', () => {
	render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Timeline />
		</MockedProvider>
	);

	expect(screen.getByText('Loading...')).toBeInTheDocument();
});

it('should return data on success state', async () => {
	render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Timeline />
		</MockedProvider>
	);
	await waitFor(() => screen.getByTestId('timeline'));
	expect(screen.getByTestId('timeline')).toBeInTheDocument();
	expect(screen.getByText('MockMock')).toBeInTheDocument();
	expect(screen.getByText('best mock courses')).toBeInTheDocument();
	expect(screen.getByAltText('test image')).toHaveAttribute(
		'src',
		'https://picsum.photos/seed/picsum/400'
	);
});
