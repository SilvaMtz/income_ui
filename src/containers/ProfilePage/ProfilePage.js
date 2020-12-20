import React from 'react';
import classes from './ProfilePage.module.css'

const ProfilePage = (props) => {

  return (
    <div className={classes['profile']}>
      <h1>Profile</h1>
      {props.children}
    </div>
  );
}

export default ProfilePage;