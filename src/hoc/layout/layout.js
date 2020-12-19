import React from 'react';
import classes from './Layout.module.css'
import Sidenav from '../../components/Sidenav/Sidenav';

const Layout = (props) => {

  const sidenavSections = [
    {
      id: 1,
      items: [
        {
          id: 1,
          label: 'Option 1',
          icon: 'home',
          routePath: '/home',
        },
        {
          id: 2,
          label: 'Option 2',
          icon: 'academicCap',
          routePath: '/profile',
        },
        {
          id: 3,
          label: 'Option 3',
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
        }
      ]
    }
  ];

  return (
    <React.Fragment>
      <Sidenav sections={sidenavSections} />
      <main className={classes['container']}>
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Layout;