import React from 'react';
import classes from './Input.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';

const Input = (props) => {
  let wrapperClassList = [
    classes['input-wrapper'],
    props.iconType ? classes['wrapper--hasIcon'] : null,
  ];

  let inputClassList = [
    classes['input'],
    props.iconType ? classes['input--hasIcon'] : null,
  ];

  let inputLabel = null;

  if (props.label) {
    inputLabel = (
      <label className={classes['input-label']}>{props.label}</label>
    );
  }

  let svgIcon = null;
  if (props.iconType) {
    svgIcon = (
      <SvgIcon
        className={classes['input-icon']}
        icon={props.iconType}
        color="#c5c5c5"
        size="small"
      />
    );
  }

  return (
    <div className={wrapperClassList.join(' ')}>
      {inputLabel}
      {svgIcon}
      <input
        className={inputClassList.join(' ')}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
