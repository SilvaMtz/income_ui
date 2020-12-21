import React from 'react';
import classes from './ToolbarSection.module.css';

const ToolbarSection = (props) => {

  return (
    <div className={classes['toolbar-section']}>
      {props.items.map(item => {
        return (
          <div key={item.id} className={classes['section-item']}>
            {item.node}
          </div>
        )
      })}
    </div>
  )
}

export default ToolbarSection;