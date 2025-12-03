import React from 'react';
import styles from './AdminOverview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import SideBar from '../SideBar/SideBar';
// import clsx from 'clsx';

const AdminOverview = () => {
  return (
    <>
        <SideBar></SideBar>
        <h2>Trang quản trị</h2>
    </>
  );
};

export default AdminOverview;