import { render } from '@testing-library/react';
import React from 'react';
import BitMasks, { initialState } from './BitMasks';

describe('BitMasks test', () => {
  it('Should render checkboxes content', () => {
    const { getAllByRole } = render(<BitMasks />);
    const checkboxesFromPage = getAllByRole('checkbox');
    expect(
      Object.keys(initialState).every((val) =>
        checkboxesFromPage.some(
          (checkbox) =>
            checkbox.textContent ===
            `${val}: GMT ${initialState[val].timestamp > 0 ? '+' : ''}${
              initialState[val].timestamp
            }`
        )
      )
    ).toBeTruthy();
  });
});
