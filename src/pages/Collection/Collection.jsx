import React from "react";
import Button from "~/components/UI/Button/Button";
import clsx from "clsx";
import styles from "./Collection.module.scss";
const Collection = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <Button primary>Clickme</Button>
    </div>
  );
};

export default Collection;
