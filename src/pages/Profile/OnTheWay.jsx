import React from 'react';
import styles from './MyOrders.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const OnTheWay = () => {
  return (
    <div className={styles.ordersPage}>
      <div className={styles.statusTabs}>
        <Link to="/profile/my-orders" className={styles.tabBtn}>
          Processing
        </Link>
        <Link to="/profile/my-orders/on-the-way" className={clsx(styles.tabBtn, styles.active)}>
          On the way
        </Link>
        <Link to="/profile/my-orders/arrived" className={styles.tabBtn}>
          Arrived
        </Link>
        <Link to="/profile/my-orders/return" className={styles.tabBtn}>
          Return
        </Link>
        <Link to="/profile/my-orders/cancelled" className={styles.tabBtn}>
          Cancelled
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/profile/overview" className={styles.backBtn}>
            &lt; Overview
          </Link>
        </div>
        <h3 className={styles.sectionTitle}>
          On The Way Orders (2 orders)
        </h3>
        <div className={styles.orderList}>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>
          <div className={styles.orderCard}>
            <div className={styles.imageCol}>
              <div className={styles.imgBox}>
                 <img src="https://via.placeholder.com/100" alt="Product 2" />
              </div>
            </div>

            <div className={styles.infoCol}>
              <h4 className={styles.productName}>Product Name</h4>
              <p className={styles.orderId}>#0381125</p>
              
              <div className={styles.priceRow}>
                <span className={styles.label}>Total</span>
                <span className={styles.price}>$802.00</span>
              </div>
            </div>

            <div className={styles.actionCol}>
              <span className={styles.arrow}>&gt;</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnTheWay;