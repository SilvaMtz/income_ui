import React, { useEffect } from 'react'
import classes from './OverlayMask.module.css'

const OverlayMask = (props) => {

  let classList = [
    classes['overlay-mask'],
    props.isOpen === false ? classes['overlay-hidden'] : null
  ]

  return (
    <div className={classList.join(' ')}>
      <div className={classes['overlay-children']}>
        {props.children}
      </div>
    </div>
  )
}

export default OverlayMask;