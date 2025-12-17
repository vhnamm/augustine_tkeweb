import React, { useState } from "react";
import styles from "./OrderPlaced.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderPlaced = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.emptyStateWrapper} grid wide`}>
        <div className={styles.emptyIconBox}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className={styles.faCircleCheck}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </div>
        <h2 className={styles.thankYouTitle}>
          Thank you for shopping at <span>augustine</span>!
        </h2>
        <h2 className={styles.orderProcessing}>
          We are currently processing your order.
           You will receive a<br />shipping confirmation email when your order
          has been shipped.
        </h2>
        <p className={styles.textOrderNumber}>
          Your order number{" "}
          <span className={styles.orderNumber}>is #0126749</span>
        </p>
      </div>
    </div>
  );
};
export default OrderPlaced;
