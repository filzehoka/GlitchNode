// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlitchNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlitchNode/i);
    expect(titleElement).toBeInTheDocument();
});
