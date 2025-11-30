import React, {useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './SearchResult.module.scss'
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const keyword = decodeURIComponent(searchParams.get("keyword"))

  useEffect(() => {
    const seperatedKeyword = keyword.trim().split(" ");
    
    const fetchSearchResults = async () => {
      try {
        const rawRes = await fetch(`http://localhost:3000/products`);
        const res = await rawRes.json();

        const filteredData = res.filter((prod) => {
          return (
            seperatedKeyword.every((word) => {
              return prod.name.toLowerCase().includes(word.toLowerCase());
            })
          )
        })

        setSearchResults(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
  }

  fetchSearchResults();
}, [])

  return (
    <div className={clsx(styles.wrapper)}>
      <h2>Kết quả tìm kiếm cho: {keyword} <span>{searchResults.length} sản phẩm</span></h2>
      <div className={clsx("grid wide")}>
        <div className={clsx("row", "small-gutter")}>
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
                      <span className={styles.rating}>Rating: {prod.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;