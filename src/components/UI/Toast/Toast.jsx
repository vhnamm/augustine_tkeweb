import React from 'react';
import ReactDOM from 'react-dom'
import styles from "./Toast.module.scss"
import clsx from 'clsx';

const Toast = ({position ="right", children}) => {
    const classes = clsx(styles.wrapper, styles[position])

  return ReactDOM.createPortal (
    <div className={classes}>
      {children}
    </div>, document.querySelector("#toast_portal")
  );
};

export default Toast;