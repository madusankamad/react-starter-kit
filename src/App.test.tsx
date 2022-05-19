import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app root must render', () => {
  render(<App />);
  //const linkElement = screen.getByText(/App/i);
  const linkElement = screen.getByTestId('appRoot');
  expect(linkElement).toBeInTheDocument();
});
