import React from 'react';
import clsx from 'clsx';
import styles from './SpringCollection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SpringCollection = () => {
  return (
    <div className={styles.container}>
      
      {/* 1. HERO */}
      <div className={styles.hero}>
        <div className={styles.scrollDown}>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>

      {/* 2. INTRO */}
      <div className={styles.introSection}>
        <h2>PLACEHOLDER TITLE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius rutrum elit, 
          in luctus lorem vulputate vel. Aenean sed posuere neque. Etiam a turpis vel orci commodo auctor 
          at nec tellus.
        </p>
      </div>

      {/* 3. ZIGZAG SECTION */}
      <div className={styles.zigzagSection}>
        
        {/* ROW 1: Ảnh bên phải (685x650), Không có Text */}
        {/* CSS :first-child sẽ tự động căn phải (justify-content: flex-end) */}
        <div className={styles.row}>
            <div 
               className={styles.imageItem} 
               style={{ width: '42.8125rem', height: '40.625rem' }}
            ></div>
            {/* Không có textItem ở đây */}
        </div>

        {/* ROW 2: Ảnh bên trái (787x546), Text bên phải */}
        <div className={styles.row}>
            <div 
               className={styles.imageItem} 
               style={{ width: '49.1875rem', height: '34.125rem' }}
            ></div>
            
            <div className={styles.textItem}>
                <h2>Dark Truffle</h2>
                <p>Hương vị sô-cô-la đen nguyên bản. Một trải nghiệm đậm đà khó quên dành cho những tín đồ thực thụ.</p>
            </div>
        </div>

        {/* ROW 3: Ảnh bên phải (787x778), Text bên trái */}
        {/* Thêm class 'reverse' để đảo ngược vị trí */}
        <div className={clsx(styles.row, styles.reverse)}>
            <div 
               className={styles.imageItem} 
               style={{ width: '49.1875rem', height: '48.625rem' }}
            ></div>
            
            <div className={styles.textItem}>
                <h2>Hazelnut Cream</h2>
                <p>Sự kết hợp hoàn hảo giữa hạt phỉ và kem béo ngậy. Vị ngọt ngào lan tỏa ngay từ miếng đầu tiên.</p>
            </div>
        </div>

        {/* ROW 4: Ảnh bên trái (1036x575), Text bên phải */}
        <div className={styles.row}>
            <div 
               className={styles.imageItem} 
               style={{ width: '64.75rem', height: '35.9375rem' }}
            ></div>
            
            <div className={styles.textItem}>
                <h2>Golden Caramel</h2>
                <p>Lớp caramel tan chảy bên trong lớp vỏ vàng óng ánh. Ngọt ngào và quyến rũ.</p>
            </div>
        </div>

      </div>

      {/* 4. CENTER SECTION (Ảnh 5 - 856x989) */}
      <div className={styles.centerSection}>
          <div 
             className={styles.imageBox} // Dùng imageBox như trong CSS của bạn
             style={{ width: '53.5rem', height: '61.8125rem' }}
          ></div>
          <div className={styles.textBox}>
              <h2>Midnight Mint</h2>
              <p>Cảm giác mát lạnh sảng khoái từ bạc hà tươi và sô-cô-la đắng. Vị ngon tinh tế đánh thức mọi giác quan.</p>
          </div>
      </div>

      {/* 5. FOOTER BANNER */}
      <div className={styles.banner}>
         <h2>SHOP NOW</h2>
         <div className={styles.arrowRight}>
             <FontAwesomeIcon icon={faArrowRight} />
         </div>
      </div>
      
    </div>
  );
};

export default SpringCollection;