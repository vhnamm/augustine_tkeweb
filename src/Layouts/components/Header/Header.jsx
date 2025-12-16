import React, { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.scss";

import Button from "~components/UI/Button/Button";
import SearchForm from "../Search/SearchForm";
import Menu from "../Menu/Menu";
import Collections from "../Collections/Collections";
import CartHeader from "../CartHeader/CartHeader";
import Modal from "../../../components/UI/Modal/Modal";
import Chat from "../Chat/Chat";

const Header = () => {
  // kết quả tìm kieemms khi call api:
  //const [searchResult, setSearchResult] = useState([1]);

  const [openCenter, setOpenCenter] = useState(false)

  function handleCloseChat(){
    setOpenCenter(false)
  }
  return (
    <>
      {openCenter && (
        <Modal type="left" color="dark" onClose={handleCloseChat}>
          <Chat setOpenCenter={setOpenCenter}></Chat>
        </Modal>
      )}
      <header className="wrapper_header">
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
          <Button className={styles.contact} primary size="medium" onClick={() => setOpenCenter(true)}>
            Contact Us
          </Button>
          
          <div className={styles.favourite}>
            <FontAwesomeIcon icon={faHeart} className={styles.fav_icon}/>
          </div>
          <div className={styles.ava}>
            <img src="/assets/531d8d6e6b86f200b46cf8cf07cbcbf7.jpg" alt="ava" />
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
