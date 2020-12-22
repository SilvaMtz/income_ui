import React, { useEffect } from 'react'
import classes from './OverlayMask.module.css'

const OverlayMask = (props) => {

  let classList = [
    classes['overlay-mask'],
    props.isOpen === false ? classes['overlay-hidden'] : null
  ]

  return (
    <div className={classList.join(' ')}>
      {props.children}
    </div>
  )
}

export default OverlayMask;