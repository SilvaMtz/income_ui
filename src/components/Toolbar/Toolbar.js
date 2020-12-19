import React from 'react'
import classes from './Toolbar.module.css'

const Toolbar = (props) => {
  return (
    <div className={classes['toolbar']}>
      {props.children}
    </div>
  )
}

export default Toolbar;