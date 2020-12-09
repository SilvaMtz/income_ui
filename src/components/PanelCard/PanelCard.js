import React from 'react';
import classes from './PanelCard.module.css';

const PanelCard = (props) => {
  const panelPaddingSizeMap = {
    none: 'panelPadding--none',
    small: 'panelPadding--small',
    medium: 'panelPadding--medium',
    large: 'panelPadding--large',
  };

  let classList = [
    classes['panel-card'],
    props.paddingSize
      ? classes[panelPaddingSizeMap[props.paddingSize]]
      : classes[panelPaddingSizeMap['medium']],
  ];

  let panelStyles = {
    maxWidth: props.maxWidth ? `${props.maxWidth}px` : null
  }

  return (
    <div className={classList.join(' ')} style={panelStyles}>
      {props.children}
    </div>
  );
};

export default PanelCard;
