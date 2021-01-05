import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AppList from './AppList';

describe('AppList test', () => {
  it('Should print title projects', () => {
    const { getByText } = render(<AppList />);
    expect(getByText('Bit Masks')).toBeInTheDocument();
  });

  it('Should print description projects', () => {
    const { getByText } = render(<AppList />);
    expect(getByText('Using Bit Masks for Conditions')).toBeInTheDocument();
  });

  it('Should redirect to project', () => {
    const history = createMemoryHistory();
    const { getAllByRole } = render(
      <Router history={history}>
        <AppList />
      </Router>
    );
    fireEvent.click(getAllByRole('link')[0]);
    expect(history.location.pathname).toEqual('/bit-masks');
  });
});
