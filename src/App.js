import { ConnectedRouter } from "connected-react-router";
import React from 'react';
import './App.css';

import ApplicationUI from './Components/ApplicationUI';

import { Provider } from 'react-redux'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import MomentUtils from '@date-io/moment';

import Theme from "./Styles/_Theme"
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { history } from './Redux'
import Store from './Redux/Store';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let preferredTheme = prefersDarkMode ? Theme('dark') : Theme('light');

  const localStorageTheme = localStorage.getItem('theme');

  if (localStorageTheme) {
    preferredTheme = Theme(localStorageTheme)
  }
  return (
      <Provider store={Store} className="App">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MuiThemeProvider
              theme={preferredTheme}
          >
            <ConnectedRouter history={history}>
              <CssBaseline />
              <ApplicationUI />
            </ConnectedRouter>
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
      </Provider>
  );
}

export default App;
