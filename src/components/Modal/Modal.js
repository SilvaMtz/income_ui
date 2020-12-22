import React from 'react';
import classes from './Modal.module.css';
import OverlayMask from '../OverlayMask/OverlayMask';
import PanelCard from '../PanelCard/PanelCard';
import SvgIcon from '../SvgIcon/SvgIcon';
import IconButton from '../IconButton/IconButton';

const Modal = (props) => {

  const bodyPaddingSizeClassMapping = {
    none: 'body--paddingNone',
    small: 'body--paddingSmall',
    medium: 'body--paddingMedium',
    large: 'body--paddingLarge'
  }


  let iconInstance = null;
  if (props.icon) {
    iconInstance = <SvgIcon icon={props.icon} />;
  }

  let bodyClassList = [
    classes['modal-body'],
    props.bodyPaddingSize
      ? classes[bodyPaddingSizeClassMapping[props.bodyPaddingSize]]
      : classes[bodyPaddingSizeClassMapping['medium']],
  ];

  return (
    <OverlayMask isOpen={props.isOpen} onClose={props.onClose}>
      <PanelCard flexDirection="column" maxWidth="500" paddingSize="none">
        <div className={classes['modal-header']}>
          <div className={classes['modal-title']}>
            {iconInstance}
            <h2>{props.title}</h2>
          </div>
          <IconButton icon="x" onClick={props.onClose} />
        </div>
        <div className={bodyClassList.join(' ')}>{props.children}</div>
      </PanelCard>
    </OverlayMask>
  );
};

export default Modal;
