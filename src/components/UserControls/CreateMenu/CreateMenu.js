import React, { useState, useRef } from 'react';
import classes from './CreateMenu.module.css';
import IconButton from '../../IconButton/IconButton';
import { ContextMenu } from '../../ContextMenu/ContextMenu';
import Popover from 'react-popover';
import NewAccountModal from '../../../containers/Modals/NewAccountModal/NewAccountModal';

const CreateMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

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
            setIsOpen(false);
            setAccountModalOpen(true);
          },
        },
        {
          name: 'Credit',
          icon: 'cash',
          label: 'Credit',
          onClick: () => {
            return;
          },
        },
        {
          name: 'Transaction',
          icon: 'switchHorizontal',
          label: 'Transaction',
          panel: 1,
          onClick: () => {
            return;
          },
        },
        {
          name: 'Insight',
          icon: 'lightbulb',
          label: 'Insight',
          onClick: () => {
            return;
          },
        },
      ],
    },
    {
      id: 1,
      title: 'Transaction',
      items: [
        {
          name: 'Transfer',
          label: 'Transfer',
          onClick: () => {
            return;
          },
        },
        {
          name: 'Deposit',
          label: 'Deposit',
          onClick: () => {
            return;
          },
        },
        {
          name: 'Withdrawal',
          label: 'Withdrawal',
          onClick: () => {
            return;
          },
        },
      ],
    },
  ];

  return (
    <React.Fragment>
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
      <NewAccountModal
        onClose={() => setAccountModalOpen(false)}
        isOpen={accountModalOpen}
      />
    </React.Fragment>
  );
};

export default CreateMenu;
