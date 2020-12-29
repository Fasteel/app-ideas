import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { teal, indigo } from '@material-ui/core/colors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBar from '../app-bar/AppBar';
import routes from '../../utils/routes';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: indigo,
  },
});

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar />
        </div>
        <Switch>
          <div>
            {routes.map((route) => (
              <Route
                exact={route.path === '/'}
                path={route.path}
                component={route.component}
              />
            ))}
          </div>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
