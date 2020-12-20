import React from 'react';
import classes from './SidenavToggle.module.css';
import SvgIcon from '../../SvgIcon/SvgIcon';

const SidenavToggle = (props) => {

  let classList = [
    classes['sidenav-toggle'],
    props.isOpen ? classes['is-open'] : null
  ]

  return (
    <button onClick={props.onClick} className={classList.join(' ')}>
      <SvgIcon icon="chevronRight" />
    </button>
  );
};

export default SidenavToggle;
