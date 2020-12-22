import React, { useState } from 'react';
import classes from './UserMenu.module.css';
import IconButton from '../../IconButton/IconButton';
import { ContextMenu } from '../../ContextMenu/ContextMenu';
import ReactTooltip from 'react-tooltip';
import Popover from 'react-popover';
import { useDarkMode } from '../../useDarkMode/useDarkMode'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const UserMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, themeToggler] = useDarkMode();

  const panels = [
    {
      id: 0,
      items: [
        {
          name: 'Profile',
          icon: 'user',
          label: 'See Profile',
          onClick: () => {
            return;
          },
        },
        {
          name: 'User Preferences',
          icon: 'cog',
          label: 'User Preferences',
          onClick: () => {
            return;
          }
        },
        {
          name: 'Display Settings',
          icon: 'eye',
          label: 'Display Settings',
          panel: 1,
        },
        {
          name: 'Logout',
          icon: 'logout',
          iconFill: 'var(--danger-red)',
          label: 'Logout',
          onClick: () => {
            return props.onLogout();
          }
        }
      ],
    },
    {
      id: 1,
      initialFocusedItemIndex: 1,
      title: 'Display Settings',
      items: [
        {
          name: 'Dark Mode',
          icon: 'moon',
          label: 'Toggle Dark Mode',
          onClick: () => {
            return themeToggler()
          },
        },
      ],
    },
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
        icon="chevronDown"
        color="default"
        fill
      />
    </Popover>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(UserMenu);
