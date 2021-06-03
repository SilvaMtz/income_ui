import React, { useState } from 'react';
import classes from './Login.module.css';
import AuthCard from '../AuthCard/AuthCard';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { FormFields, InputField, ActionButton } from 'react-play-ui';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthLogin = (e) => {
    e.preventDefault();
    props.onAuth(email, password);
  };

  return (
    <div className={classes['login-container']}>
      <AuthCard
        maxWidth={900}
        formLabel="Welcome Back!"
        authImage="Account Image"
      >
        <FormFields>
          <InputField
            placeholder="Email"
            icon="atSymbol"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <InputField
            placeholder="Password"
            icon="key"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <ActionButton
            onClick={handleAuthLogin}
            fill={true}
            color="primary"
            label="Log in"
            restrainWidth={false}
          />
          <h6 style={{ margin: 0, marginLeft: 2, marginTop: 2, color: "rgb(var(--primary-color))" }}><a href="/">Recover Password</a></h6>
        </FormFields>
        <h5 style={{ margin: "12px 0px", fontWeight: 400 }}>Not registered? Sign up below!</h5>
        <ActionButton
          color="primary"
          fill={false}
          href="/register"
          label="Register"
          restrainWidth={false}
        />
      </AuthCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.isLoading,
    error: state.auth.error,
    isAuthenticated: state.auth.token != null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
