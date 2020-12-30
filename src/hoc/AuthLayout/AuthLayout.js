import React, { useEffect } from 'react';
import classes from './AuthLayout.module.css';
import Sidenav from '../../components/Sidenav/Sidenav';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../../themes/index';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { useDarkMode } from '../../components/useDarkMode/useDarkMode';
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler';
import Toolbar from '../../components/Toolbar/Toolbar';
import UserMenu from '../../components/UserControls/UserMenu/UserMenu';
import CreateMenu from '../../components/UserControls/CreateMenu/CreateMenu';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const AuthLayout = (props) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  useEffect(() => {
    if (props.isAuthenticated) {
      props.onFetchBanks()
      props.onFetchAccounts(props.token);
    }
  });

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

  const toolbarSections = [
    {
      id: 1,
      items: [
        {
          id: 1,
          node: <ThemeToggler theme={theme} toggleTheme={themeToggler} />,
        },
        {
          id: 2,
          node: <CreateMenu />,
        },
        {
          id: 3,
          node: <UserMenu />,
        },
      ],
    },
  ];

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Sidenav sections={sidenavSections} />
      <main className={classes['layout']}>
        <Toolbar sections={toolbarSections} />
        {props.children}
      </main>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBanks: () => dispatch(actions.fetchBanks()),
    onFetchAccounts: (token) => dispatch(actions.fetchAccounts(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
