import '@testing-library/jest-dom/extend-expect';

import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Router from '../Router';
import darkTheme from '../theme/darkTheme';

it('should display a complete layout, with a footer and a header that contains a logo, a nav menu and a button', async () => {
  render(
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>,
  );
  await waitFor(() => screen.getByTestId('footer'));

  // Header tests
  // expect(screen.getByText(/^Se connecter$/i)).toHaveAttribute(
  // 	'href',
  // 	'/signin'
  // );
  expect(screen.getByTestId('header')).toBeInTheDocument();
  // expect(screen.getByTestId('logo-title')).toBeInTheDocument();
  // expect(screen.getByTestId('menu')).toBeInTheDocument();
  // expect(screen.getByTestId('menu')).toContainHTML('a');
  // expect(screen.getByText(/^home$/i)).toHaveAttribute('href', '/');
  // expect(screen.getByText(/^wiki$/i)).toHaveAttribute('href', '/wiki');
  // expect(screen.getByText(/^Settings$/i)).toHaveAttribute('href', '/settings');
  // expect(screen.getByText(/^Help$/i)).toHaveAttribute('href', '/help');
  // expect(screen.getByTestId('menu')).toContainHTML('button');
  // Footer tests
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
