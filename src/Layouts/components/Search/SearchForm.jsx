import React, { useEffect, useState } from "react";
import styles from "./SearchForm.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/UI/Modal/Modal";
import Button from "~/components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [searchResult, setSearchResult] = useState([])
  const [animate, setAnimate] = useState(false);


 function handleSearch(e){
  e.preventDefault()
  if(keyword.trim() == "") return
  setShowModal(false)
  navigate(`search/?keyword=${encodeURIComponent(keyword.trim())}`)

 }

 function handleInput(e){
    
    const value = e.target.value
    setKeyword(value)
    if(value.trim() !== ""){
      setShowModal(true)
    }else{
      setShowModal(false)
    }
 }

 //fetch api search
 useEffect(() => {
  if (!keyword.trim()) {
    setSearchResult([]);
    return;
  }
  const timeID = setTimeout(async () => {
    const seperatedKeywords = keyword.trim().split(/\s+/).filter(Boolean).map(key => `name_like=${encodeURIComponent(key)}`).join('&');

    try {
      const rawRes = await fetch(`http://localhost:3000/products?${seperatedKeywords}`)
      const res = await rawRes.json()
      setSearchResult(res)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }, 600) 

 return () => clearTimeout(timeID)
 }, [keyword])


useEffect(() => {
  if (showModal) {
    setTimeout(() => setAnimate(true), 10);
  } else {
    setAnimate(false);
  }
}, [showModal]);

  return (
    <>
    {showModal && (
      <Modal className={clsx(styles.search_suggest_wrap , {[styles.animate] : animate})}>
        <div>
          <h4 className={styles.txtKetqua}>Search result</h4>
          <h3>Xem tất cả</h3>
        </div>
        <div className={clsx("grid", styles.container)}>
          <div className={clsx("row", styles.item_row)}>
            {
              searchResult.map((prod) => {

                return(

                    <div className={clsx("col", "lg-2-5")}>
                      <div className={styles["card-item"]}>
                        <Link to="/product/ao-phong" className={styles.item_link}>
                          <div className={styles.item_img}>
                            <img src={prod.images[0]} alt="ảnh" />
                          </div>
                        </Link>
                        <div className={styles.name_price_wrap}>
                          <h4>{prod.name}</h4>
                          <h4>{prod.price}</h4>
                        </div>

                        <div className={styles.item_bottom_wrap}>
                          <h4 className={styles.sold}>Sold {prod.soldCount}</h4>

                          <div className={clsx(styles.rating)}>
                                              
                            <span className={styles.rate}>{prod.rating}/5</span>
                            <FontAwesomeIcon className={clsx(styles.star)} icon={faStar} />
                          </div>
                        </div>
                      </div>             
                    </div>
                )
              })
            }
            

         
        

          </div>
        </div>
      </Modal>

    )}
      
      <form onSubmit={(e) => handleSearch(e)} className={clsx(styles.search_wrapper)}>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        spellCheck={false}
        onChange={(e) => handleInput(e)}

        onFocus={() => setShowModal(true)}
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
    </>
  );
};

export default SearchForm;
