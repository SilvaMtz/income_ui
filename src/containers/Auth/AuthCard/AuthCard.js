import React from 'react';
import classes from './AuthCard.module.css';
import PanelCard from '../../../components/PanelCard/PanelCard';

const AuthCard = (props) => {

  let childrenClassList = [
    classes['card-box'],
    classes['children-card-box']
  ]

  let imageBoxClassList = [
    classes['card-box'],
    classes['image-card-box']
  ]

  return (
    <PanelCard maxWidth={props.maxWidth} paddingSize="none">
      <div className={classes['auth-card']}>
        <div className={imageBoxClassList.join(' ')}>
          Image Content
        </div>
        <div className={childrenClassList.join(' ')}>
          <h2 className={classes['form-label']}>{props.formLabel}</h2>
          {props.children}
        </div>
      </div>
    </PanelCard>
  );
};

export default AuthCard;
