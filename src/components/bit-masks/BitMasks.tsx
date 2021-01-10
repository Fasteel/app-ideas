import React, { useState } from 'react';
import {
  Grid,
  Checkbox,
  FormControlLabel,
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

export const initialState: state = {
  Moscow: {
    timestamp: 3,
    checked: false,
  },
  Paris: {
    timestamp: 2,
    checked: false,
  },
  Berlin: {
    timestamp: 2,
    checked: false,
  },
  Brussels: {
    timestamp: 2,
    checked: false,
  },
  Amsterdam: {
    timestamp: 2,
    checked: false,
  },
  Rome: {
    timestamp: 2,
    checked: false,
  },
  London: {
    timestamp: 1,
    checked: false,
  },
  Dublin: {
    timestamp: 1,
    checked: false,
  },
  'New York': {
    timestamp: -4,
    checked: false,
  },
  'Washington, DC': {
    timestamp: -4,
    checked: false,
  },
  'St. Louis': {
    timestamp: -5,
    checked: false,
  },
  'Los Angeles': {
    timestamp: -7,
    checked: false,
  },
  Tokyo: {
    timestamp: 9,
    checked: false,
  },
  Beijing: {
    timestamp: 8,
    checked: false,
  },
  'Ho Chi Mihn City': {
    timestamp: 7,
    checked: false,
  },
  Mumbai: {
    timestamp: 5,
    checked: false,
  },
};

interface state {
  [key: string]: {
    timestamp: number;
    checked: boolean;
  };
}

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 500,
  },
  title: {
    fontSize: 14,
  },
}));

export default function BitMasks(): JSX.Element {
  const [checkboxes, setCheckboxes] = useState(initialState);
  const classes = useStyles();

  return (
    <Box p="1rem" m="1rem">
      <Grid container justify="center">
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Choose a city
            </Typography>
            <Box display="flex" flexDirection="column">
              {Object.keys(checkboxes).map((key, index) => (
                <FormControlLabel
                  key={index.toString()}
                  control={
                    <Checkbox
                      onChange={() =>
                        setCheckboxes({
                          ...checkboxes,
                          [key]: {
                            ...checkboxes[key],
                            checked: !checkboxes[key].checked,
                          },
                        })
                      }
                      checked={checkboxes[key].checked}
                    />
                  }
                  label={`${key}: GMT ${
                    checkboxes[key].timestamp > 0 ? '+' : ''
                  }${checkboxes[key].timestamp}`}
                  role="checkbox"
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
