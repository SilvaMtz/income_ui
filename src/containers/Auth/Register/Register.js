import React, { useState } from 'react';
import axiosLocal from '../../../axios-local';
import classes from './Register.module.css';
import Input from '../../../components/Input/Input';
import AuthCard from '../AuthCard/AuthCard';
import ActionButton from '../../../components/ActionButton/ActionButton';
import Form from '../../../components/Form/Form';

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
        password_confirmation: password,
      },
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
        <Form>
          <Input
            placeholder="Name"
            iconType="userCircle"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <Input
            placeholder="Last Name"
            iconType="user"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <Input
            placeholder="Email"
            iconType="atSymbol"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Password"
            iconType="key"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            placeholder="Confirm Password"
            iconType="lockClosed"
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
          <ActionButton onClick={handleFormSubmit} fill={true} color="primary">
            Submit
          </ActionButton>
        </Form>
        <h5>Already have and account? Log in!</h5>
        <ActionButton restrainWidth={true} href="/login" label="Log in" />
      </AuthCard>
    </div>
  );
};

export default Register;
