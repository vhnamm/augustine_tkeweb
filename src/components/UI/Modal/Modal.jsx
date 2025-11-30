import React from 'react';
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import clsx from 'clsx';

const Modal = ({ children, className, width = "medium", center=true }) => {
  const classes = clsx(styles.modal, styles[width], className, {
    [styles.center]: center
  });

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={classes}>
        {children}
      </div>
    </div>,
    document.querySelector("#portal")
  );
};


export default Modal;