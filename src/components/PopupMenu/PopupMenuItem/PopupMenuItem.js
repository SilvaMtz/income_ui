import React from 'react';
import classes from './PopupMenuItem.module.css';
import { NavLink } from 'react-router-dom';
import SvgIcon from '../../SvgIcon/SvgIcon';

const PopupMenuItem = (props) => {
  let classList = [classes['popup-menu-item']];

  let itemIcon = null;
  if (props.icon) {
    itemIcon = <SvgIcon size="extraSmall" icon={props.icon} />;
  }

  let arrow = null;
  if (props.hasPanel) {
    arrow = <SvgIcon icon="chevronRight" />
  }

  let itemButton = (
    <button onClick={props.onClick} className={classList.join(' ')}>
      <div className={classes['label-container']}>
        {itemIcon}
        <p className={classes['label']}>{props.label}</p>
      </div>
      {arrow}
    </button>
  );

  if (props.href) {
    itemButton = (
      <NavLink href={props.href} className={classList.join(' ')}>
        <div>
          {itemIcon}
          <p className={classes['label']}>{props.label}</p>
        </div>
        {arrow}
      </NavLink>
    );
  }

  return itemButton;
};

export default PopupMenuItem;
