import React, { useState } from 'react';
import axios from 'axios';
import classes from './Register.module.css';
import PanelCard from '../../../components/PanelCard/PanelCard';
import Input from '../../../components/Input/Input';

const Register = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user: {
        email: email,
        password: password,
        password_confirmation: password
      }
    }
    axios.post('http://localhost:3000/users', formData)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })

  };

  return (
    <div className={classes['register-container']}>
      <PanelCard maxWidth={600}>
        REGISTER
        <Input placeholder="email" />
      </PanelCard>

      {/* <form>
        <input placeholder="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleFormSubmit}>SUBMIT</button>
      </form> */}
    </div>
  )
}

export default Register;