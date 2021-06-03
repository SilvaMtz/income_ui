import './App.css';
import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Register from './containers/Auth/Register/Register';
import Home from './containers/Home/Home';
import Login from './containers/Auth/Login/Login';
import { Layout } from './hoc/Layout/Layout.tsx';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  useDarkMode
} from 'react-play-ui';

const App = (props) => {

  const themeMode = useDarkMode() === 'light' ? LightTheme : DarkTheme;

  useEffect(() => {
    props.onTryAutoSignup();
  });

  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    );
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <div className="App">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
