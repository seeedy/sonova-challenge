import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.splash}></div>
      <div className={styles.quote}>
        <img
          alt='quote'
          src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/ec027519-geers-green-quotation-marks_102x02t000000000000000.png'
        />
        <div>
          <div className={styles.quoteText}>
            vel illum dolore eu feugiat nulla facilisis
          </div>
          <div className={styles.quoteName}>aliquip ex ea</div>
        </div>
      </div>
      <div className={styles.footerBar}>
        <div className={styles.content}>
          <div className={styles.impressum}>Impressum/Datenschutz</div>
        </div>
        <div className={styles.copyright}>
          Copyright © sit amet. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
