import React from 'react';
import classes from './AuthCard.module.css';
import { PanelCard } from 'react-play-ui';

const AuthCard = (props) => {

  const childrenClassList = [
    classes['card-box'],
    classes['children-card-box']
  ]

  return (
    <PanelCard maxWidth={350} paddingSize="none">
      <div className={classes['auth-card']}>
        <div className={childrenClassList.join(' ')}>
          <h2 className={classes['form-label']}>{props.formLabel}</h2>
          {props.children}
        </div>
      </div>
    </PanelCard>
  );
};

export default AuthCard;
