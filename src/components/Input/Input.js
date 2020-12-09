import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  let classList = [classes['input']];

  return (
    <input
      className={classList.join(' ')}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;
