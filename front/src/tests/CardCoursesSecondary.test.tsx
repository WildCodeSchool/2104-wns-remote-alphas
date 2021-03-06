import '@testing-library/jest-dom/extend-expect';

import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import CardCoursesSecondary from '../components/timeline/CardCoursesSecondary';
import darkTheme from '../theme/darkTheme';

test('should have a good title course', async () => {
  render(
    <ThemeProvider theme={darkTheme}>
      <CardCoursesSecondary
        title="test"
        image="assets/images/mongo.png"
        imageDescription="image video"
        course="back-end"
        id="AIAZDHOIAZDAOI"
      />
    </ThemeProvider>,
  );
  await waitFor(() => {
    screen.getByTestId('title-secondary-card');
  });
  expect(screen.getByTestId('title-secondary-card')).toBeInTheDocument();
  expect(screen.getByTestId('title-secondary-card')).toHaveTextContent('test');
});
