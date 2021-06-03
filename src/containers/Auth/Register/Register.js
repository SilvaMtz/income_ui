import React, { useState } from 'react';
import axiosLocal from '../../../axios-local';
import classes from './Register.module.css';
import AuthCard from '../AuthCard/AuthCard';
import { FormFields, InputField, ActionButton } from 'react-play-ui';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user: {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_confirmation: password
      }
    };
    axiosLocal
      .post('/users', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes['register-container']}>
      <AuthCard maxWidth={900} formLabel="Register" authImage="Account Image">
        <FormFields>
          <InputField
            placeholder="Name"
            icon="userCircle"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <br />
          <InputField
            placeholder="Last Name"
            icon="user"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <br />
          <InputField
            placeholder="Email"
            icon="atSymbol"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <InputField
            placeholder="Password"
            icon="key"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <InputField
            placeholder="Confirm Password"
            icon="lockClosed"
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
          <br />
          <ActionButton
            onClick={handleFormSubmit}
            fill={true}
            restrainWidth={false}
            color="primary"
            label="Register"
          />
        </FormFields>
        <h5 style={{ margin: "12px 0px", fontWeight: 400 }}>Already have and account? Log in!</h5>
        <ActionButton fill={false} color="primary" restrainWidth={false} href="/login" label="Log in" />
      </AuthCard>
    </div>
  );
};

export default Register;
