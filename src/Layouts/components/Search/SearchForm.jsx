import React from "react";
import styles from "./SearchForm.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/UI/Button/Button";

const SearchForm = () => {
  return (
    <div className={clsx(styles.search_wrapper)}>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        spellCheck={false}
      />
      <Button className={clsx(styles["clear-btn"])}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </Button>
      <FontAwesomeIcon
        className={clsx(styles["loading-icon"])}
        icon={faSpinner}
      />

      <Button className={clsx(styles["search-btn"])}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  );
};

export default SearchForm;
