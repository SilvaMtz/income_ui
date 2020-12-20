import React from 'react';
import classes from './PopupMenu.module.css';

const PopupMenu = (props) => {

  let classList = [
    classes['popup-menu']
  ]

  return (
    <div className={classList.join(' ')}>
      {props.children}
    </div>
  );
}

export default PopupMenu;