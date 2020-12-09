import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  let classList = [classes['input']];

  let inputLabel = null;

  if (props.label) {
    inputLabel = (
      <label className={classes['input-label']}>{props.label}</label>
    );
  }

  return (
    <div className={classes['input-wrapper']}>
      {inputLabel}
      <input
        className={classList.join(' ')}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
