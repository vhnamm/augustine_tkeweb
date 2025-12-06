import React, {useState, useEffect, use } from 'react';
import clsx from 'clsx';
import styles from './SearchResult.module.scss'
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faFilter, faStar } from '@fortawesome/free-solid-svg-icons';
import Filter from '~/components/UI/Filter/Filter';
import Modal from '~/components/UI/Modal/Modal';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const[opdenModal, setOpenModal] = useState(false);
  const [animate, setAnimate] = useState(false)
  const [page, setPage] = useState(1);
  const [totalProds, setTotalProds] = useState(0);

  const keyword = decodeURIComponent(searchParams.get("keyword"))
  

  useEffect(() => {
    const seperatedKeyword = keyword.trim().split(" ").filter(Boolean);
    const queryString = seperatedKeyword
        .map((word) => `name_like=${word}`)
        .join("&");

    const fetchSearchResults = async () => {
      try {
        const rawRes = await fetch(`http://localhost:3000/products?${queryString}&_limit=12&_page=${page}`);
        const res = await rawRes.json();
        let total = rawRes.headers.get("X-Total-Count");

        setTotalProds(total);
        setSearchResults(res);
        console.log(rawRes);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
  }

  fetchSearchResults();
}, [keyword, page])


  function handleOpenModal(){
    setAnimate(true)
    setOpenModal(true)

  }

  function handleCloseModal(){
    setAnimate(false)
    setTimeout(() => {
      setOpenModal(false)
    } , 300);
  }
  return (
    
    <>

      {opdenModal &&
        <Modal type="left" onClose={handleCloseModal} 
          className={clsx(styles.modal_filter_wrap, {[styles.animate] : animate, [styles.close] : !animate})}
        >
          <Filter onClose ={handleCloseModal}></Filter>
        </Modal>
      }
      <div className={clsx(styles.wrapper)}>
      <div className={clsx("grid wide")}>
        {searchResults.length > 0 ? <h2 className={styles.text_label}>
          Kết quả tìm kiếm cho: <span className={styles.keyword}>{keyword}</span> <span className={styles.number_prod}>{totalProds} sản phẩm</span>
          </h2> : 
        
          <h2>Không tìm thấy sản phẩm nào cho: {keyword}</h2>
        }

        <div className={styles.option_wrapper}>
          <div className={styles.order_by}>
            
              <span>Price</span>
              <FontAwesomeIcon icon={faAngleDown} className={styles.angle_down}/>
          </div>

            
          

          <div onClick={() => handleOpenModal()} className={styles.filter_wrap}>
              
              <FontAwesomeIcon icon={faFilter} className={styles.filter_icon}/>
              <span>Filter</span>
            </div>
        </div>
        <div className={clsx("row")}>
          {searchResults.map(prod => {
            return (
              <div className={clsx("col", "lg-3")} key={prod.id}>
                <div className={styles.card_item}>
                  <Link to={`/product/${prod.slug}`} className={styles.item_link}>
                    <div className={clsx(styles.item_img)}>
                      <img src={prod.images[0]} alt={prod.name} />
                    </div>
                  </Link>

                  <div className={styles.item_bottom_wrap}>
                    <h3 className={styles["item-name"]}>{prod.name}</h3>
                    <h4 className={styles["item-price"]}>{prod.price}đ</h4>

                    <div className={styles.item_foot_wrap}>
                      <span className={styles.sold}>Sold {prod.soldCount}</span>
                      <div>
                        <span className={styles.rating}>{prod.rating}/5</span>
                        <FontAwesomeIcon icon={faStar} className={styles.star}/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}

          
        </div>
      </div>
    </div>
    </>
  );
};

export default SearchResult;