import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    render, screen, waitFor
} from '@testing-library/react';
import CardCourses from '../components/CardCourses';
import '@testing-library/jest-dom/extend-expect';
import darkTheme from '../theme/darkTheme';

it('should display a "Test" title, an image with "assets/images/mongo.png" src, and a course theme', async () => {
    render(
        <ThemeProvider theme={darkTheme}>
            <CardCourses
                title="test"
                image="assets/images/mongo.png"
                imageDescription="test image"
                course="this is a course"
            />
        </ThemeProvider>
        );
    await waitFor(() => screen.getByTestId('card-course'));
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toHaveTextContent('test');
    expect(screen.getByTestId('card-image')).toBeInTheDocument();
    expect(screen.getByTestId('card-image')).toContainHTML('assets/images/mongo.png');
    expect(screen.getByTestId('card-theme')).toBeInTheDocument();
});
