import React from 'react';
import Spinner from '../Spinner/Spinner';
import SvgIcon from '../SvgIcon/SvgIcon';
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

  let iconInstance = null;
  if (props.icon && !props.isLoading) {
    iconInstance = <SvgIcon icon={props.icon} size="small" color="white" />
  }

  let button = (
    <button
      className={classList.join(' ')}
      onClick={props.onClick}
      type="button"
    >
      {props.children ? props.children : props.label}
      {iconInstance}
    </button>
  );

  if (props.href) {
    button = (
      <a className={classList.join(' ')} href={props.href} type="button">
        {props.children ? props.children : props.label}
        {iconInstance}
      </a>
    );
  }

  return button;
};

export default ActionButton;
