import React from 'react';
import classes from './home.module.css';
import PopupMenu from '../../components/PopupMenu/PopupMenu';
import PopupMenuItem from '../../components/PopupMenu/PopupMenuItem/PopupMenuItem';

const Home = (props) => {
  return (
    <div className={classes['home']}>
      <PopupMenu>
        <PopupMenuItem icon="academicCap" label="Option 1" />
        <PopupMenuItem icon="cog" label="Option 2" hasPanel />
        <PopupMenuItem icon="adjustments" label="Option 3" />
        <PopupMenuItem icon="check" label="Option 4" />
      </PopupMenu>
    </div>
  );
};

export default Home;
