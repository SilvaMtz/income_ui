import React from 'react';
import classes from './IconButton.module.css';

const IconButton = (props) => {
  const buttonColorMapping = {
    none: '',
    default: 'button--default',
    primary: 'button--primary',
    danger: 'button--danger',
  };

  const buttonSizeMapping = {
    medium: '',
    large: 'button--large'
  }

  let classList = [
    classes['icon-button'],
    props.color
      ? classes[buttonColorMapping[props.color]]
      : classes[buttonColorMapping['none']],
    props.fill ? classes['fill'] : null,
    props.size
      ? classes[buttonSizeMapping[props.size]]
      : classes[buttonSizeMapping['medium']],
  ];

  let button = (
    <button
      className={classList.join(' ')}
      onClick={props.onClick}
      type="button"
    >
      <SvgIcon icon={props.icon} size={props.size ? props.size : "small"} />
    </button>
  );

  if (props.href) {
    button = (
      <a className={classList.join(' ')} href={props.href} type="button">
        <SvgIcon icon={props.icon} size={props.size ? props.size : "small"} />
      </a>
    );
  }

  return button;
};

export default IconButton;
