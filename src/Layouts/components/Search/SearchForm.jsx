import React, { useState } from "react";
import styles from "./SearchForm.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
 function handleSearch(e){
  e.preventDefault()
  if(keyword.trim() == "") return
  navigate(`search/?keyword=${encodeURIComponent(keyword.trim())}`)

 }

 function handleInput(e){
    

    setKeyword(e.target.value)
 }
  return (
    <form onSubmit={(e) => handleSearch(e)} className={clsx(styles.search_wrapper)}>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        spellCheck={false}
        onChange={(e) => handleInput(e)}
        value={keyword}
      />
      <Button className={clsx(styles["clear-btn"])}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </Button>
      <FontAwesomeIcon
        className={clsx(styles["loading-icon"])}
        icon={faSpinner}
      />

      <Button onClick={handleSearch} className={clsx(styles["search-btn"])}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </form>
  );
};

export default SearchForm;
