import React from 'react';
import styles from './Products.module.scss'
import clsx from 'clsx';
const Products = () => {
  return (
    <div className={clsx(styles.test)}>
      Đây là trang đổ giao diện phần tất cả sản phẩm của Bộ sưu tập
    </div>
  );
};

export default Products;