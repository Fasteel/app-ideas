import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Select,
  Grid,
} from '@material-ui/core';
import { onlyUnique } from '../../utils/functions';

interface citiesState {
  [key: string]: {
    gmt: string;
    checked: boolean;
  };
}

export const initialStateCities: citiesState = {
  Moscow: {
    gmt: '+3',
    checked: false,
  },
  Paris: {
    gmt: '+2',
    checked: false,
  },
  Berlin: {
    gmt: '+2',
    checked: false,
  },
  Brussels: {
    gmt: '+2',
    checked: false,
  },
  Amsterdam: {
    gmt: '+2',
    checked: false,
  },
  Rome: {
    gmt: '+2',
    checked: false,
  },
  London: {
    gmt: '+1',
    checked: false,
  },
  Dublin: {
    gmt: '+1',
    checked: false,
  },
  'New York': {
    gmt: '-4',
    checked: false,
  },
  'Washington, DC': {
    gmt: '-4',
    checked: false,
  },
  'St. Louis': {
    gmt: '-5',
    checked: false,
  },
  'Los Angeles': {
    gmt: '-7',
    checked: false,
  },
  Tokyo: {
    gmt: '+9',
    checked: false,
  },
  Beijing: {
    gmt: '+8',
    checked: false,
  },
  'Ho Chi Mihn City': {
    gmt: '+7',
    checked: false,
  },
  Mumbai: {
    gmt: '+5',
    checked: false,
  },
};

const initialStateGmt = '';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 500,
    marginBottom: '1rem',
  },
  title: {
    fontSize: 14,
  },
}));

function CitiesSelector({
  cities,
  setCities,
}: {
  cities: citiesState;
  setCities: Dispatch<SetStateAction<citiesState>>;
}) {
  const classes = useStyles();

  return (
    <Grid>
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
            {Object.keys(cities).map((key, index) => (
              <FormControlLabel
                key={index.toString()}
                control={
                  <Checkbox
                    onChange={() =>
                      setCities({
                        ...cities,
                        [key]: {
                          ...cities[key],
                          checked: !cities[key].checked,
                        },
                      })
                    }
                    checked={cities[key].checked}
                  />
                }
                label={`${key}: GMT ${cities[key].gmt}`}
                role="checkbox"
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function GMTSelector({
  gmt,
  setGmt,
}: {
  gmt: string;
  setGmt: Dispatch<SetStateAction<string>>;
}) {
  const classes = useStyles();

  const handleChangeGmt = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = e.target.value as string;
    setGmt(value);
  };

  const gmtPossibilities = useMemo(() => {
    return Object.keys(initialStateCities)
      .map((key) => initialStateCities[key].gmt)
      .filter(onlyUnique)
      .sort();
  }, []);

  return (
    <Grid>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Choose a GMT
          </Typography>
          <Box display="flex" flexDirection="column">
            <Select
              native
              value={gmt}
              onChange={handleChangeGmt}
              inputProps={{
                name: 'GMT',
              }}
            >
              <option aria-label="None" value="" />
              {gmtPossibilities.map((gmtPossibility, index) => (
                <option key={index.toString()} value={gmtPossibility}>
                  {gmtPossibility}
                </option>
              ))}
            </Select>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Output({ output }: { output: string[] }): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Output
        </Typography>
        {output.map((oneOutput) => (
          <Typography>{oneOutput}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}

function Container({ children }: { children: JSX.Element[] }): JSX.Element {
  return (
    <Box p="1rem" m="1rem">
      <Grid container spacing={3} direction="column" alignItems="center">
        {children}
      </Grid>
    </Box>
  );
}

export default function BitMasks(): JSX.Element {
  const [cities, setCities] = useState(initialStateCities);
  const [gmt, setGmt] = useState(initialStateGmt);

  const filteredOutput = useMemo(() => {
    return Object.keys(cities).filter(
      (key) => cities[key].gmt === gmt && cities[key].checked
    );
  }, [cities, gmt]);

  // todo test réaction composant Output
  return (
    <Container>
      <CitiesSelector cities={cities} setCities={setCities} />
      <GMTSelector gmt={gmt} setGmt={setGmt} />
      <Output output={filteredOutput} />
    </Container>
  );
}
