import React from 'react';
import IconButton from '../IconButton/IconButton';

const ThemeToggler = ({ theme, toggleTheme }) => {
  let svgIcon = theme === 'light' ? 'moon' : 'sun';

  return (
    <IconButton
      onClick={toggleTheme}
      icon={svgIcon}
    />
  );
};

export default ThemeToggler;
