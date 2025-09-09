import React from "react";
import clsx from "clsx";
import styles from "./Popper.module.scss";
const Popper = ({ children, className }) => {
  return <div className={clsx(styles.popper, className)}>{children}</div>;
};

export default Popper;
