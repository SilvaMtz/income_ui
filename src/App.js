import './App.css';
import React, { useEffect } from 'react';
import { LightTheme, DarkTheme } from './themes/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './hoc/GlobalStyles/GlobalStyles';
import { useDarkMode } from './components/useDarkMode/useDarkMode';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';
import ActionButton from './components/ActionButton/ActionButton';
import Register from './containers/Auth/Register/Register';
import Home from './containers/home/home';
import Login from './containers/Auth/Login/Login';
import Layout from './hoc/Layout/Layout';
import Profile from './containers/Profile/Profile';

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  });

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );

  let logoutButton = null;

  if (props.isAuthenticated) {
    routes = (
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    );
    logoutButton = (
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          marginRight: '12px',
        }}
      >
        <ActionButton color="danger" fill onClick={props.onLogout}>
          Logout
        </ActionButton>
      </div>
    );
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <div
          style={{ position: 'absolute', top: 0, left: 0, marginLeft: '12px' }}
        >
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </div>
        {logoutButton}
        {routes}
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
