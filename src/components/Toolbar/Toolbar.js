import React from 'react'
import classes from './Toolbar.module.css'
import ToolbarSection from './ToolbarSection/ToolbarSection';

const Toolbar = (props) => {

  let classList = [
    classes['toolbar'],
    props.sections.length > 1 ? classes['space-between'] : null
  ]

  return (
    <div className={classList.join(' ')}>
      {props.sections.map(section => {
        return <ToolbarSection key={section.id} items={section.items} />
      })}
    </div>
  )
}

export default Toolbar;