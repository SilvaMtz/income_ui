import React from 'react';
import classes from './SidenavSection.module.css';
import SidenavItem from '../SidenavItem/SidenavItem';

const SidenavSection = (props) => {
  return (
    <div className={classes['sidenav-section']}>
      <hr />
      {props.items.map((item) => {
        return (
          <SidenavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            routePath={item.routePath}
            extended={props.extended}
          />
        );
      })}
    </div>
  );
};

export default SidenavSection;
