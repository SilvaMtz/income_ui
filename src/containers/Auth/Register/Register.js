import React, { useState } from 'react';
import axios from 'axios';
import classes from './Register.module.css';
import Input from '../../../components/Input/Input';
import AuthCard from '../AuthCard/AuthCard';
import ActionButton from '../../../components/ActionButton/ActionButton';
import Form from '../../../components/Form/Form';

const Register = (props) => {
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
        password: password,
        password_confirmation: password,
      },
    };
    axios
      .post('http://localhost:3000/users', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDummySubmit = (e) => {
    e.preventDefault();
    const dummyData = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };
    console.log(dummyData);
  };

  return (
    <div className={classes['register-container']}>
      <AuthCard maxWidth={700} formLabel="Register" authImage="Account Image">
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <ActionButton
            onClick={handleDummySubmit}
            fill={true}
            color="primary"
          >
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