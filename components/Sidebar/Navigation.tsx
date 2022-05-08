import React from 'react';
import { NextComponentType } from 'next';
import Link from 'next/link';

import styles from '../../styles/Navigation.module.css';

const Navigation: NextComponentType = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/challenge/2022'>
            <a className={styles.link}>2022</a>
          </Link>
        </li>
        <li>
          <Link href='/challenge/2021'>
            <a className={styles.link}>2021</a>
          </Link>
        </li>
        <li>
          <Link href='/challenge/2020'>
            <a className={styles.link}>2020</a>
          </Link>
        </li>
        <li>
          <Link href='/challenge/2019'>
            <a className={styles.link}>2019</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;