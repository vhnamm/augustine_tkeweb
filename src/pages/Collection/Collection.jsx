import React from "react";
import Button from "~/components/UI/Button/Button";
import clsx from "clsx";
import styles from "./Collection.module.scss";
const Collection = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <h1 style={{color : "#fff",
        margin: "600px"
      }}>Đây là trang  giới thiệu các bộ sưu tập</h1>
    </div>
  );
};

export default Collection;
