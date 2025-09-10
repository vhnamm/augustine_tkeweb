import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "~components/UI/Button/Button";
import styles from "./Header.module.scss";
import SearchForm from "../Search/SearchForm";
import Menu from "../Menu/Menu";
import Collections from "../Collections/Collections";
import CartHeader from "../CartHeader/CartHeader";
import { Link } from "react-router-dom";

const Header = () => {
  // kết quả tìm kieemms khi call api:
  //const [searchResult, setSearchResult] = useState([1]);

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header_wrap, "grid", "wide")}>
        <div className={clsx(styles.header_left_wrap)}>
          <div className={clsx(styles.logo)}>
            <Link to="/" className={styles.name_web}>augustine</Link>
          </div>

          <Menu />
          <Collections />
        </div>

        <SearchForm />
        <div className={clsx(styles.header_actions)}>
          <CartHeader />
          <Button primary size="medium">
            Log In
          </Button>
          <Button outlined size="medium">
            Sign Up
          </Button>
          <div>
            <FontAwesomeIcon
              className={clsx(styles["user-icon"])}
              icon={faUser}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
