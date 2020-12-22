import React from 'react';
import classes from './Layout.module.css';
import Sidenav from '../../components/Sidenav/Sidenav';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../../themes/index';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { useDarkMode } from '../../components/useDarkMode/useDarkMode';
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler';
import Toolbar from '../../components/Toolbar/Toolbar';
import UserMenu from '../../components/UserControls/UserMenu/UserMenu';
import CreateMenu from '../../components/UserControls/CreateMenu/CreateMenu';

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

  const toolbarSections = [
    {
      id: 1,
      items:[
        {
          id: 1,
          node: <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        },
        {
          id: 2,
          node: <CreateMenu />
        },
        {
          id: 3,
          node: <UserMenu />
        }
      ]
    }
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



export default Layout;
