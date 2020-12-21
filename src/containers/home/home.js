import React from 'react';
import classes from './home.module.css';
import { ContextMenu } from '../../components/ContextMenu/ContextMenu';

const Home = (props) => {

  const panels = [
    {
      id: 0,
      title: 'This is a context menu',
      items: [
        {
          name: 'Handle an onClick',
          icon: "annotation",
          label: "Annotation",
          onClick: () => {
            return;
          },
        },
        {
          name: 'Go to a link',
          icon: 'collection',
          href: 'http://elastic.co',
          target: '_blank',
          label: "Annotation",
        },
        {
          name: 'Nest panels',
          icon: 'cog',
          label: "Annotation",
          panel: 1,
        },
      ]
    },
    {
      id: 1,
      initialFocusedItemIndex: 1,
      title: 'Nest panels',
      items: [
        {
          name: 'PDF reports',
          icon: 'check',
          label: "PDF",
          onClick: () => {
            return;
          },
        },
      ],
    },
  ]


  return (
    <div className={classes['home']}>

      <ContextMenu initialPanelId={0} panels={panels} />
    </div>
  );
};

export default Home;
