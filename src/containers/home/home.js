import React from 'react';

const Home = (props) => {
  return (
    <div className={classes['home']}>
      {props.children}
    </div>
  )
}

export default Home;