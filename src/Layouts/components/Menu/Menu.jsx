import React from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Menu = () => {
  return (
    <div className={clsx(styles.menu_wrap)}>
      <h2>Menu</h2>
    </div>
  );
};

export default Menu;
