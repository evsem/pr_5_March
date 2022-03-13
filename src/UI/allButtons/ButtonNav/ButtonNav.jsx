import React from 'react'
import classes from './ButtonNav.module.css'

const ButtonNav = ({ children, ...props }) => {
  return (
    <button className={classes.buttonNav} {...props}>
      {children}
    </button>
  )
}

export default ButtonNav
