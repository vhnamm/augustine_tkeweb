import React from 'react';
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import clsx from 'clsx';
import Button from '../Button/Button';
const Modal = ({ children, className, width = "medium", center=true , closeBtn=false, onClose}) => {
  const classes = clsx(styles.modal, styles[width], className, {
    [styles.center]: center
  });

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={classes}>
        {children}
      </div>
      {console.log(onClose)}
      {closeBtn && <Button onClick={() => onClose(false)} className={styles.close_btn} primary size="medium">Đóng</Button>}
    </div>,
    document.querySelector("#portal")
  );
};


export default Modal;