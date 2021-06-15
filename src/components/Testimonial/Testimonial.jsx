import React from 'react';
import styles from './Testimonial.module.css';
import { Button } from '../';

const Testimonial = () => {
  const texts = [
    'quis nostrud exerci tation ullamcorper suscipit lobortis',
    'nisl ut aliquip ex ea commodo consequat',
    'autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
  ];
  return (
    <div className={styles.testimonial}>
      <div className={styles.content}>
        <div className={styles.checkmarks}>
          {texts.map((text) => (
            <div className={styles.checkmarkBox}>
              <div className={styles.checkmark}>
                <img
                  alt='checkmark'
                  src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/644a5b68-grey-tick-new_100z00z000000000000000.png'
                />
              </div>
              <div className={styles.text}>{text}</div>
            </div>
          ))}
        </div>
        <div className={styles.guarantees}>
          <div className={styles.logos}>
            <img
              alt='logo'
              src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/661e4500-geers-service-trust-symbol_103202t000000000000000.png'
            />
            <img
              alt='logo'
              src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/6e35485c-geers-best-price-trust-symbol_103202t000000000000000.png'
            />
            <img
              alt='logo'
              src='https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/ad67a67d-geers-satisfaction-trust-symbol_103202t000000000000000.png'
            />
          </div>
          <div className={styles.buttonBox}>
            <Button text='qui blandit praesent' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
