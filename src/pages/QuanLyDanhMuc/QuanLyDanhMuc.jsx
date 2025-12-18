import React from "react";
import styles from "./QuanLyDanhMuc.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";

const QuanLyDanhMuc = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quản Lý Danh Mục</h1>
        <button className={styles.addBtn}>+ Thêm Danh Mục Chính</button>
      </div>

      <div className={styles.mainCategoriesGrid}>
        <div className={styles.mainCategoryCard}>
          <div className={styles.mainCatHeader}>
            <div className={styles.mainCatTitle}>
              <span className={styles.mainCatIcon}>
                <FontAwesomeIcon icon={faMars} />
              </span>
              <h3>Nam</h3>
            </div>
            <button className={styles.addSubBtn}>+ Thêm Danh Mục Con</button>
          </div>

          <div className={styles.subCategoriesList}>
            {[
              ["Shirts", "45 sản phẩm"],
              ["Trousers", "32 sản phẩm"],
              ["Accessories", "28 sản phẩm"],
              ["Underwear", "15 sản phẩm"],
              ["Hoodie", "22 sản phẩm"],
            ].map(([name, count]) => (
              <div className={styles.subCategoryItem} key={name}>
                <div className={styles.subCatInfo}>
                  <span className={styles.subCatName}>{name}</span>
                  <span className={styles.subCatCount}>{count}</span>
                </div>
                <div className={styles.subCatActions}>
                  <button className={styles.editIconBtn}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className={styles.deleteIconBtn}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mainCategoryCard}>
          <div className={styles.mainCatHeader}>
            <div className={styles.mainCatTitle}>
              <span className={styles.mainCatIcon}>
                <FontAwesomeIcon icon={faVenus} />
              </span>
              <h3>Nữ</h3>
            </div>
            <button className={styles.addSubBtn}>+ Thêm Danh Mục Con</button>
          </div>

          <div className={styles.subCategoriesList}>
            {[
              ["Shirts", "45 sản phẩm"],
              ["Trousers", "32 sản phẩm"],
              ["Accessories", "28 sản phẩm"],
              ["Underwear", "15 sản phẩm"],
              ["Hoodie", "22 sản phẩm"],
            ].map(([name, count]) => (
              <div className={styles.subCategoryItem} key={name}>
                <div className={styles.subCatInfo}>
                  <span className={styles.subCatName}>{name}</span>
                  <span className={styles.subCatCount}>{count}</span>
                </div>
                <div className={styles.subCatActions}>
                  <button className={styles.editIconBtn}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className={styles.deleteIconBtn}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuanLyDanhMuc;
