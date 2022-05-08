import React from 'react';
import Link from 'next/link';

import Navigation from './Navigation';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <header>
        <Link href='/'>
          <a>
            <h1 className={styles.title}>Code challenges</h1>
          </a>
        </Link>
      </header>
      <Navigation />
    </aside>
  );
};

export default Sidebar;