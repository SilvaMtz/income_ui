import React from 'react';
import classes from './Layout.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Sidenav from '../../components/Sidenav/Sidenav';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../../themes/index';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { useDarkMode } from '../../components/useDarkMode/useDarkMode';
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler';
import Toolbar from '../../components/Toolbar/Toolbar';
import ActionButton from '../../components/ActionButton/ActionButton';

const Layout = (props) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  const sidenavSections = [
    {
      id: 1,
      items: [
        {
          id: 1,
          label: 'Home',
          icon: 'home',
          routePath: '/home',
        },
        {
          id: 2,
          label: 'Accounts',
          icon: 'collection',
          routePath: '/accounts',
        },
        {
          id: 3,
          label: 'Credits',
          icon: 'cog',
          routePath: '/profile',
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          label: 'Option 4',
          icon: 'check',
          routePath: '/profile',
        },
        {
          id: 2,
          label: 'Option 5',
          icon: 'adjustments',
          routePath: '/profile',
        },
      ],
    },
  ];

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Sidenav sections={sidenavSections} />
      <main className={classes['layout']}>
        <Toolbar>
          <div>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </div>
          <div>
            <ActionButton
              color="danger"
              fill
              onClick={props.onLogout}
              size="small"
            >
              Logout
            </ActionButton>
          </div>
        </Toolbar>
        {props.children}
      </main>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Layout);
