import React, { cloneElement, useEffect, useState } from 'react';
import classes from './PopupPanel.module.css';
import PopupMenuItem from '../PopupMenuItem/PopupMenuItem';
import SvgIcon from '../../SvgIcon/SvgIcon';

const PopupPanel = React.memo((props) => {
  const transitionDirectionAndTypeMapping = {
    next: {
      in: 'panel-txInLeft',
      out: 'panel-txOutLeft',
    },
    previous: {
      in: 'panel-txInRight',
      out: 'panel-txOutRight',
    },
  };

  const [prevProps, setPrevProps] = useState({ items: props.items });
  const [menuItems, setMenuItems] = useState([]);
  const [currentHeight, setCurrentHeight] = useState(undefined);
  const [height, setHeight] = useState(0);

  let _isMounted = false;
  let backButton = null;
  let content = null;
  let panel = null;

  const onTransitionComplete = () => {
    if (props.onTransitionComplete) {
      props.onTransitionComplete();
    }
  };

  const getDerivedStateFromProps = (nextProps, prevState) => {
    let needsUpdate = false;
    const nextState = {};

    if (nextProps.items !== prevState.prevProps.items) {
      needsUpdate = true;
      nextState.menuItems = [];
      nextState.prevProps = { items: nextProps.items };
    }

    if (needsUpdate) {
      return nextState;
    }

    return null;
  };

  const getWatchedPropsForItems = (items) => {
    const { watchedItemProps } = props;
    if (items.length && watchedItemProps && watchedItemProps.length) {
      return JSON.stringify(
        items.map((item) => {
          const cProps = {
            key: item.key,
          };
          watchedItemProps.forEach((prop) => {
            cProps[prop] = item.props[prop];
          });
          return cProps;
        }),
      );
    }
    return null;
  };

  const didItemsChange = (prevItems, nextItems) => {
    if (prevItems.length !== nextItems.lenght) {
      return true;
    }
    if (
      getWatchedPropsForItems(nextItems) !== getWatchedPropsForItems(prevItems)
    ) {
      return true;
    }
  };

  const updateHeight = () => {
    const cCurrentHeight = panel ? panel.clientHeight : 0;
    if (height !== cCurrentHeight) {
      if (props.onHeightChange) {
        props.onHeightChange(cCurrentHeight);
        setHeight(cCurrentHeight);
      }
    }
  };

  const menuItemRef = (index, node) => {
    if (node) {
      menuItems[index] = node;
    }
  };

  const panelRef = (node) => {
    panel = node;
    updateHeight();
  };

  const contentRef = (node) => {
    content = node;
  };

  useEffect(() => {
    _isMounted = true;
    return () => {
      _isMounted = false;
    };
  });

  let panelTitle = null;
  if (props.title) {
    if (onClose) {
      panelTitle = (
        <button
          className={classes['popup-panel-title']}
          type="button"
          onClick={onClose}
          ref={(node) => {
            backButton = node;
          }}
        >
          <SvgIcon icon="arrowLeft" />
          <p>{props.title}</p>
        </button>
      );
    } else {
      panelTitle = (
        <div className={classes['popup-panel-title']}>{props.title}</div>
      );
    }
  }

  let classList = [
    classes['popup-panel'],
    transitionDirection &&
    transitionType &&
    transitionDirectionAndTypeMapping[transitionDirection]
      ? transitionDirectionAndTypeMapping[transitionDirection][transitionType]
      : undefined,
  ];

  let cContent =
    items && items.length
      ? items.map((menuItem, index) => {
          menuItem.type === PopupMenuItem
            ? cloneElement(menuItem, {
                buttonRef: menuItemRef.bind(this, index),
              })
            : menuItem;
        })
      : null;

  return (
    <div
      className={classList.join(' ')}
      onAnimationEnd={this.onTransitionComplete}
    >
      {panelTitle}
      <div ref={contentRef}>
        {cContent}
      </div>
    </div>
  );
});

export default PopupPanel;
