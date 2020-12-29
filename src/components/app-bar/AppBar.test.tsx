import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBar from './AppBar';
import { infoExpected } from '../app-bar-dialog/AppBarDialog.test';

it('Should print the title inside AppBar', () => {
  render(<AppBar />);
  const title = screen.getByText(/Fasteel - App Ideas Collection/i);
  expect(title).toBeInTheDocument();
});

it('Should open modal on button click', () => {
  render(<AppBar />);
  const button = screen.getByRole('button');
  button.click();
  expect(screen.queryByText(infoExpected)).not.toBeNull();
});
