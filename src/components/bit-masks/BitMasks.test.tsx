import { render } from '@testing-library/react';
import React from 'react';
import BitMasks, { checkboxes } from './BitMasks';

describe('BitMasks test', () => {
  it('Should see checkboxes', () => {
    const { getAllByRole } = render(<BitMasks />);
    const checkboxesFromPage = getAllByRole('checkbox');
    expect(
      checkboxes.every((val) =>
        checkboxesFromPage.some((checkbox) => checkbox.textContent === val)
      )
    ).toBeTruthy();
  });
});
