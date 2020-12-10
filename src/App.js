import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './hoc/GlobalStyles/GlobalStyles';
import { LightTheme, DarkTheme } from './themes/index';
import { Switch, Route } from 'react-router-dom';
import Register from './containers/Auth/Register/Register';
import Login from './containers/Auth/Login/Login';
import { useDarkMode } from './components/useDarkMode/useDarkMode';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

function App() {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <div style={{position: 'absolute', top: 0, right: 0, marginRight: '12px'}}>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;