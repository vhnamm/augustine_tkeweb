import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartHeader.module.scss";
import clsx from "clsx";

const CartHeader = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.cart_icon)}>
      <FontAwesomeIcon
        className={clsx(styles["cart-icon"])}
        icon={faBagShopping}
      />
      </div>

      <div className={clsx(styles.quantity_wrap)}>
        <span>10</span>
      </div>
    </div>
  );
};

export default CartHeader;
