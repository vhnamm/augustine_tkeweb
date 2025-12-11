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
          <Chat></Chat>
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
            <img src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/503186511_2260630544391853_5985719783730471123_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHlpNM4djcVLI-k89gHWoDnuOM1rkHCe_a44zWuQcJ79lqd2eOIY1pZNgw53uXPWZerZrRB7Lfl_SBzf60DFtZ_&_nc_ohc=VeSUMVPZqKgQ7kNvwFmqdwj&_nc_oc=AdkHmSgsLaxrYsNDxKSxuG6-uD8mSWD5Kfa-bl-0ZrZypxyHcqjDiK1dtsEoJq3FHXo&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=aGy5NdPy1IKbAzzVt0x0Xg&oh=00_AfmgSMP-e5lBivWraIXX6P49FjiJv5CFlfuSrDXfT4bJFg&oe=693D8C0F" alt="ava" />
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
