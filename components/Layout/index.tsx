import React from 'react';
import Sidebar from '../Sidebar';

import styles from '../../styles/Layout.module.css';

// @ts-ignore
const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;