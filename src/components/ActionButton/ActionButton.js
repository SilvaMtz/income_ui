import React from 'react';
import classes from './ActionButton.module.css';

const ActionButton = (props) => {
  const buttonColorMapping = {
    none: '',
    default: 'button--default',
    primary: 'button--primary',
    danger: 'button--danger',
  };

  const buttonSizeMapping = {
    default: '',
    medium: 'button--medium',
    large: 'button--large'
  }

  let classList = [
    classes['action-button'],
    props.color
      ? classes[buttonColorMapping[props.color]]
      : classes[buttonColorMapping['none']],
    props.fill ? classes['fill'] : null,
    props.size
      ? classes[buttonSizeMapping[props.size]]
      : classes[buttonSizeMapping['default']],
    props.restrainWidth ? classes['restrain-width'] : null
  ];

  let button = (
    <button
      className={classList.join(' ')}
      onClick={props.onClick}
      type="button"
    >

      {props.children ? props.children : props.label}
    </button>
  );

  if (props.href) {
    button = (
      <a className={classList.join(' ')} href={props.href} type="button">
        {props.children ? props.children : props.label}
      </a>
    );
  }

  return button;
};

export default ActionButton;
