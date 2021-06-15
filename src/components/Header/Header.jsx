import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/f496f71e-official-geers-logo_103w010000000000000000.png'
          alt='logo'
          loading='lazy'
        />
      </div>
      <div className={styles.contact}>
        <div className={styles.phone}>030 3080 7688</div>
        <div className={styles.times}>
          <span>Mo - Sa</span>
          <span className={styles.hours}>9 - 18 Uhr</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
