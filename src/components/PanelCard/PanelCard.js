import React from 'react';
import classes from './PanelCard.module.css';

const PanelCard = (props) => {
  const panelPaddingSizeMap = {
    none: 'panelPadding--none',
    small: 'panelPadding--small',
    medium: 'panelPadding--medium',
    large: 'panelPadding--large',
  };

  const flexDirectionMapping = {
    row: 'flex-row',
    column: 'flex-column',
  };

  let classList = [
    classes['panel-card'],
    props.paddingSize
      ? classes[panelPaddingSizeMap[props.paddingSize]]
      : classes[panelPaddingSizeMap['medium']],
    props.flexDirection
      ? classes[flexDirectionMapping[props.flexDirection]]
      : classes[flexDirectionMapping['row']],
  ];

  let panelStyles = {
    maxWidth: props.maxWidth ? `${props.maxWidth}px` : null,
  };

  return (
    <div className={classList.join(' ')} style={panelStyles}>
      {props.children}
    </div>
  );
};

export default PanelCard;
