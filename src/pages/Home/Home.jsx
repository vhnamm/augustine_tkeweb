import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/UI/Button/Button';
import Card from '~/components/UI/Card/Card';
import HomeProducts from '~/components/Components/HomeProducts/HomeProducts';
const cx = classNames.bind(styles);
const Home = () => {
   return (
      <div className={cx('body_container')}>
         <HomeProducts />
      </div>
   );
};

export default Home;
