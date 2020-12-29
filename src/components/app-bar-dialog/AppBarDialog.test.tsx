import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBarDialog from './AppBarDialog';

// eslint-disable-next-line import/prefer-default-export
export const infoExpected = /Ce site a pour objectif de servir de base de travail afin d'accomplir les différents projets proposés sur.*/;

it('Should print Information into modal', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(<AppBarDialog visible setVisible={(val) => null} />);
  expect(screen.getByText('Information')).toBeInTheDocument();
});

it('Should print Fermer into modal', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(<AppBarDialog visible setVisible={(val) => null} />);
  expect(screen.getByText('Fermer')).toBeInTheDocument();
});

it('Should give info to user', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(<AppBarDialog visible setVisible={(val) => null} />);
  expect(screen.getByText(infoExpected)).toBeInTheDocument();
});

it('Should not give info to user', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(<AppBarDialog visible={false} setVisible={(val) => null} />);
  expect(screen.queryByText(infoExpected)).toBeNull();
});
