import React from 'react';
import classes from './SidenavItem.module.css';
import { NavLink } from 'react-router-dom';
import SvgIcon from '../../SvgIcon/SvgIcon';

const SidenavItem = (props) => {
  let classList = [
    classes['sidenav-item'],
    props.extended ? classes['extended'] : null
  ];

  return (
    <NavLink
      to={props.routePath}
      className={classList.join(' ')}
      activeClassName={classes['active']}
    >
      <SvgIcon icon={props.icon} size="extraSmall" color="var(--text-color)" />
      <h5
        className={
          props.extended ? classes['label'] : classes['label-invisible']
        }
      >
        {props.label}
      </h5>
    </NavLink>
  );
};

export default SidenavItem;
