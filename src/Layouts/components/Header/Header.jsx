import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/UI/Button/Button";

import styles from "./Header.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
  // kết quả tìm kieemms khi call api:
  //const [searchResult, setSearchResult] = useState([1]);

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header_wrap, "grid", "wide")}>
        <div className={clsx(styles.logo)}>
          <h2>Augustine</h2>
        </div>

        <div className={clsx(styles.category_wrap)}>
          <h3>
            <Link className={clsx(styles.link)} to="/collections">
              Sản phẩm mới
            </Link>
          </h3>
          <h3>
            <Link className={clsx(styles.link)} to="/collections/do-nam">
              Đồ nam
            </Link>
          </h3>

          <h3>
            <Link className={clsx(styles.link)} to="/collections/do-nu">
              Đồ nữ
            </Link>
          </h3>

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
        </div>

        <div className={clsx(styles.header_actions)}>
          <div>
            <FontAwesomeIcon
              className={clsx(styles["user-icon"])}
              icon={faUser}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className={clsx(styles["cart-icon"])}
              icon={faBagShopping}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
