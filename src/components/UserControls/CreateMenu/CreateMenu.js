import React, { useState, useRef } from 'react';
import classes from './CreateMenu.module.css';
import IconButton from '../../IconButton/IconButton';
import { ContextMenu } from '../../ContextMenu/ContextMenu';
import Popover from 'react-popover';

const CreateMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const panels = [
    {
      id: 0,
      title: 'Create',
      items: [
        {
          name: 'Account',
          icon: 'collection',
          label: 'Account',
          onClick: () => {
            return;
          },
        },
        {
          name: 'Credit',
          icon: 'cash',
          label: 'Credit',
          onClick: () => {
            return;
          }
        },
        {
          name: 'Transaction',
          icon: 'switchHorizontal',
          label: 'Transaction',
          onClick: () => {
            return;
          }
        },
        {
          name: 'Insight',
          icon: 'lightbulb',
          label: 'Insight',
          onClick: () => {
            return;
          }
        }
      ],
    }
  ];

  return (
    <Popover
      className={classes['popover-dd']}
      isOpen={isOpen}
      place="below"
      preferPlace="below"
      body={<ContextMenu initialPanelId={0} panels={panels} />}
      onOuterAction={() => setIsOpen(!isOpen)}
      enterExitTransitionDurationMs={200}
    >
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        icon="plus"
        color="default"
        fill
      />
    </Popover>
  );
};

export default CreateMenu;