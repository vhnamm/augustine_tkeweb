import React from 'react';
import styles from './AdminLayout.module.scss'
import { Outlet } from 'react-router-dom';
import SideBar from '../../pages/SideBar/SideBar';
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
  return (
    <div className={styles.container}>
      <AdminHeader></AdminHeader>
      <SideBar></SideBar>

      <div className={styles.children_wrap}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;