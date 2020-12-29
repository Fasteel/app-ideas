import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { teal, indigo } from '@material-ui/core/colors';
import AppBar from '../app-bar';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: indigo,
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
