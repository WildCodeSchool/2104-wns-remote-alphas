import React from 'react';
import { render, screen } from '@testing-library/react';
import Router from './Router';

it('renders wiki link', () => {
	render(<Router />);
	const linkElement = screen.getByText(/wiki/i);
	expect(linkElement).toBeInTheDocument();
});
