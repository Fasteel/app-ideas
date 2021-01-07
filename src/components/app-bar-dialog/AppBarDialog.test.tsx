import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBarDialog from './AppBarDialog';

// eslint-disable-next-line import/prefer-default-export
export const infoExpected = /This site aims to serve as a working basis in order to accomplish the various projects proposed.*/;

describe('AppBarDialog test', () => {
  it('Should print Information into modal', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(<AppBarDialog visible setVisible={(val) => null} />);
    expect(screen.getByText('Information')).toBeInTheDocument();
  });

  it('Should print Close into modal', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(<AppBarDialog visible setVisible={(val) => null} />);
    expect(screen.getByText('Close')).toBeInTheDocument();
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
});
