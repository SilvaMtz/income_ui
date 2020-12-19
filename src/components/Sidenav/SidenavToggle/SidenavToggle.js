import React from 'react';
import classes from './SidenavToggle.module.css';
import SvgIcon from '../../SvgIcon/SvgIcon';

const SidenavToggle = (props) => {
  return (
    <button onClick={props.onClick} className={classes['sidenav-toggle']}>
      <SvgIcon icon="menu" />
    </button>
  );
};

export default SidenavToggle;
