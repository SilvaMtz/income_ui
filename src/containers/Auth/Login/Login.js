import React, { useState } from 'react';
import classes from './Login.module.css';
import Input from '../../../components/Input/Input';
import AuthCard from '../AuthCard/AuthCard';
import ActionButton from '../../../components/ActionButton/ActionButton';
import Form from '../../../components/Form/Form';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthLogin = (e) => {
    e.preventDefault();
    props.onAuth(email, password)
  };

  return (
    <div className={classes['login-container']}>
      <AuthCard
        maxWidth={900}
        formLabel="Welcome Back!"
        authImage="Account Image"
      >
        <Form>
          <Input
            placeholder="Email"
            icon="atSymbol"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            icon="key"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ActionButton onClick={handleAuthLogin} fill={true} color="primary">
            Log in
          </ActionButton>
        </Form>
        <h5>Not registered? Sign up below!</h5>
        <ActionButton restrainWidth={true} href="/register" label="Register" />
      </AuthCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.isLoading,
    error: state.auth.error,
    isAuthenticated: state.auth.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) =>
      dispatch(actions.auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
