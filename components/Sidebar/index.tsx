import React from 'react';

import Navigation from './Navigation';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <header>
        <h1 className={styles.title}>Code challenges</h1>
      </header>
      <Navigation />
    </aside>
  );
};

export default Sidebar;