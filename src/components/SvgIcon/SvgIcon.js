import React from 'react';
import classes from './SvgIcon.module.css';
import icons from '../../assets/icons/icons';

const SvgIcon = (props) => {

  const iconSizeMapping = {
    small: '',
    medium: 'icon--medium',
    large: 'icon--large',
  }

  let classList = [
    classes['svg-icon'],
    props.size ? classes[iconSizeMapping[props.size]] : null,
    props.className
  ]

  let iconColor = props.color ? props.color : 'var(--text-color)';

  return (
    <svg
      className={classList.join(' ')}
      fill={iconColor}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d={icons[props.icon]}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SvgIcon;
