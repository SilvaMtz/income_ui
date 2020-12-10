import React, { useState } from 'react';
import classes from './Login.module.css';
import Input from '../../../components/Input/Input';
import AuthCard from '../AuthCard/AuthCard';
import ActionButton from '../../../components/ActionButton/ActionButton';
import Form from '../../../components/Form/Form';
import axiosLocal from '../../../axios-local';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthLogin = (e) => {
    e.preventDefault();

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    axiosLocal
      .post('/users/sign_in', loginData)
      .then((response) => {
        console.log(response.headers);
      })
      .catch((error) => {
        console.log(error);
      });
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
            iconType="atSymbol"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            iconType="key"
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

export default Login;
