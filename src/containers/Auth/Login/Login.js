import React, { useState } from 'react';
import classes from './Login.module.css';
import Input from '../../../components/Input/Input';
import AuthCard from '../AuthCard/AuthCard';
import ActionButton from '../../../components/ActionButton/ActionButton';
import Form from '../../../components/Form/Form';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);
  };

  return (
    <div className={classes['login-container']}>
      <AuthCard maxWidth={900} formLabel="Log in" authImage="Account Image">
        <Form>
          <Input placeholder="Email" iconType="atSymbol" />
          <Input placeholder="Password" iconType="key" />
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

export default Login;
