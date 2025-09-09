import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartHeader.module.scss";
import clsx from "clsx";

const CartHeader = () => {
  return (
    <div>
      <FontAwesomeIcon
        className={clsx(styles["cart-icon"])}
        icon={faBagShopping}
      />
    </div>
  );
};

export default CartHeader;
