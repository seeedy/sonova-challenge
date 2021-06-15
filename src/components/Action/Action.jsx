import React from 'react';
import styles from './Action.module.css';
import { Button } from '../';

const Action = () => {
  return (
    <div className={styles.action}>
      <div className={styles.title}>
        <h1>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </h1>
      </div>
      <div className={styles.buttonBox}>
        <Button text='Jetzt Hörgeräte kostenlos testen' />
      </div>
      <div className={styles.logos}>
        <div>
          <img
            alt='kundenzufriedenheit'
            loading='lazy'
            src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/21b448ee-dka2020-1platz-kundenzufriedenheit-hoergeraete-akustiker-geers-quer-01_103e01o000000000000000.png'
          />
        </div>
        <div>
          <img
            alt='trusted-shop'
            loading='lazy'
            src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/7bea8d9d-trusted-shops-logo_101o01o000000000000000.png'
          />
        </div>
        <div>
          <img
            alt='ekomi'
            loading='lazy'
            src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/93d4fa9f-trust-logo_101p01o01o01o000000000.png'
          />
        </div>
        <div className={styles.starRating}>
          <img
            alt='stars-rating'
            loading='lazy'
            src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/625afd42-geers-gold-stars-4-7_103i00n000000000000000.png'
          />
          <div className={styles.rating}>4,7/5</div>
        </div>
      </div>
    </div>
  );
};

export default Action;
