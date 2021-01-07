import React, { useState } from 'react';
import { Grid, Checkbox, FormControlLabel, Box } from '@material-ui/core';

export const checkboxes = [
  'Moscow: GMT +3',
  'Paris: GMT +2',
  'Berlin: GMT +2',
  'Brussels: GMT +2',
  'Amsterdam: GMT +2',
  'Rome: GMT +2',
  'London: GMT +1',
  'Dublin: GMT +1',
  'New York: GMT -4',
  'Washington, DC: GMT -4',
  'St. Louis: GMT -5',
  'Los Angeles: GMT -7',
  'Tokyo: GMT +9',
  'Beijing: GMT +8',
  'Ho Chi Mihn City: GMT +7',
  'Mumbai: GMT +5',
];

interface state {
  [key: string]: boolean;
}

const getInitialState = () => {
  const initalState: state = {};
  checkboxes.forEach((checkbox) => {
    initalState[checkbox] = false;
  });
  return initalState;
};

export default function BitMasks(): JSX.Element {
  const [checked, setChecked] = useState(getInitialState());

  return (
    <Grid container justify="center">
      <Box display="flex" flexDirection="column">
        {checkboxes.map((checkbox, index) => (
          <FormControlLabel
            key={index.toString()}
            control={
              <Checkbox
                onChange={() =>
                  setChecked({ ...checked, [checkbox]: !checked[checkbox] })
                }
                checked={checked[checkbox]}
              />
            }
            label={checkbox}
            role="checkbox"
          />
        ))}
      </Box>
    </Grid>
  );
}
