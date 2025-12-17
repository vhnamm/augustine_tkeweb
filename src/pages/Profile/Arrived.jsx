import styles from './MyOrders.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Arrived = () => {
  return (
    <div className={styles.ordersPage}>
      <div className={styles.statusTabs}>
        <Link to="/profile/my-orders/processing" className={styles.tabBtn}>
          Processing
        </Link>
        <Link to="/profile/my-orders/on-the-way" className={styles.tabBtn}>
          On the way
        </Link>
        <Link to="/profile/my-orders/arrived" className={clsx(styles.tabBtn, styles.active)}>
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
          Arrived Orders (2 orders)
        </h3>

        <div className={styles.orderList}>
             <div className={styles.orderCard}>
                <div className={styles.imageCol}>
                  <div className={`${styles.imgBox} ${styles.stacked}`}>
                     <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Product 1" />
                  </div>
                </div>
                <div className={styles.infoCol}>
                  <h4 className={styles.productName}>Product Name & Product Name</h4>
                  <p className={styles.orderId}>#9226749</p>
                  <div className={styles.priceRow}>
                    <span className={styles.label}>Total</span>
                    <span className={styles.price}>$2,727.27</span>
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

export default Arrived;