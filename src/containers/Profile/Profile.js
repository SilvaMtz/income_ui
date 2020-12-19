import React from 'react';
import classes from './Profile.module.css'

const Profile = (props) => {

  return (
    <div className={classes['profile']}>
      <h1>Profile</h1>
      {props.children}
    </div>
  );
}

export default Profile;