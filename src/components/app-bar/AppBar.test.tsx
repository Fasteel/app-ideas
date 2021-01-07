import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AppBar from './AppBar';
import { infoExpected } from '../app-bar-dialog/AppBarDialog.test';

describe('AppBar test', () => {
  it('Should print the title inside AppBar', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppBar />
      </Router>
    );
    const title = getByText(/Fasteel - App Ideas Collection/i);
    expect(title).toBeInTheDocument();
  });

  it('Should open modal on button click', () => {
    const history = createMemoryHistory();
    const { queryByText, getByRole } = render(
      <Router history={history}>
        <AppBar />
      </Router>
    );
    const button = getByRole('button');
    button.click();
    expect(queryByText(infoExpected)).not.toBeNull();
  });

  it('Should print route description home', () => {
    const history = createMemoryHistory();
    history.push('/');
    const { getByRole } = render(
      <Router history={history}>
        <AppBar />
      </Router>
    );
    expect(getByRole('description')).toHaveTextContent('App Ideas Collection');
  });

  it('Should print route description home', () => {
    const history = createMemoryHistory();
    history.push('/bit-masks');
    const { getByRole } = render(
      <Router history={history}>
        <AppBar />
      </Router>
    );
    expect(getByRole('description')).toHaveTextContent(
      'Using Bit Masks for Conditions'
    );
  });

  it('Should redirect to home page', () => {
    const history = createMemoryHistory();
    history.push('/bit-masks');
    const { getByRole } = render(
      <Router history={history}>
        <AppBar />
      </Router>
    );
    fireEvent.click(getByRole('description'));
    expect(history.location.pathname).toEqual('/');
  });
});
