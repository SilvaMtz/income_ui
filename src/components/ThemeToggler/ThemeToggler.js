import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import SvgIcon from '../SvgIcon/SvgIcon';
import classes from './ThemeToggler.module.css';

const ThemeToggler = ({ theme, toggleTheme }) => {
  let svgIcon = theme === 'light' ? 'moon' : 'sun';

  return (
    <ActionButton
      restrainWidth={true}
      onClick={toggleTheme}
      size="large"
      color="primary"
      fill={false}
    >
      <div className={classes['icon-container']}>
        <SvgIcon icon={svgIcon} />
      </div>
      {theme === 'light' ? 'Toggle Night Mode' : 'Toggle Day Mode'}
    </ActionButton>
  );
};

export default ThemeToggler;
