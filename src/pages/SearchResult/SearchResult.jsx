import React from 'react';
import clsx from 'clsx';
import styles from './SearchResult.module.scss'
import { useSearchParams } from 'react-router-dom';

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = decodeURIComponent(searchParams.get("keyword"))
  return (
    <div className={clsx(styles.wrapper)}>
      <h2>Kết quả tìm kiếm cho: {keyword}</h2>
    </div>
  );
};

export default SearchResult;