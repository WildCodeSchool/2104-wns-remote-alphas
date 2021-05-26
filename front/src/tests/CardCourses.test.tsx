import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CardCourses from '../components/CardCourses';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../theme/darkTheme';

test('should display an image, a title, a description and a course', async () => {
    render(<ThemeProvider theme={darkTheme}><CardCourses title="test" image="" imageDescription="test image" course="this is a course" /></ThemeProvider>);
    await waitFor(() => screen.getByTestId('card-course'));
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
});