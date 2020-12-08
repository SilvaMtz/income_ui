import React from 'react';

const Auth = (props) => {
  return (
    <div className={classes['auth']}>
      {props.children}
    </div>
  )
}

export default Auth;