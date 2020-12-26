import React from 'react';
import classes from './Spinner.module.css';

const Spinner = (props) => {
  const spinnerSizeMapping = {
    tiny: 'spinner--tiny',
    small: 'spinner--small',
    medium: 'spinner--medium',
    large: '',
  };

  let classList = [
    classes['lds-ring'],
    props.size ? classes[spinnerSizeMapping[props.size]] : null,
  ];

  return (
    <div className={classList.join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
