import { render } from '@testing-library/react';
import React from 'react';
import BitMasks, { initialStateCities } from './BitMasks';

describe('BitMasks test', () => {
  it('Should render checkboxes content', () => {
    const { getAllByRole } = render(<BitMasks />);
    const checkboxesFromPage = getAllByRole('checkbox');
    expect(
      Object.keys(initialStateCities).every((key) =>
        checkboxesFromPage.some(
          (checkbox) =>
            checkbox.textContent ===
            `${key}: GMT ${initialStateCities[key].gmt}`
        )
      )
    ).toBeTruthy();
  });
});
