import React, { FunctionComponent } from 'react';
import classes from './Layout.module.css';
import { Toolbar } from 'react-play-ui'

export const Layout: FunctionComponent = ({ children }) => {

  const toolbarSections = [
    {
      id: 1,
      items: [
        {
          id: 1,
          content: <div />
        },
        {
          id: 2,
          content: <div />
        }
      ]
    }
  ];

  return (
    <React.Fragment>
      <main className={classes['layout']}>
        <Toolbar sections={toolbarSections} />
        {children}
      </main>
    </React.Fragment>
  );
};
