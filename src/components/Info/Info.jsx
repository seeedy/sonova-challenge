import React from 'react';
import styles from './Info.module.css';
import { Button } from '../';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoBox}>
        <div className={`${styles.infoImg} ${styles.firstImg}`}></div>
        <div className={styles.infoText}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className={styles.paragraph}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
          <p className={styles.paragraph}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren.
          </p>
        </div>
      </div>
      <div className={styles.buttonBox}>
        <Button text='sed diam voluptua' />
      </div>
      <div className={`${styles.infoBox} ${styles.secondBox}`}>
        <div className={styles.infoText}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className={styles.paragraph}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren.
          </p>
        </div>
        <div className={`${styles.infoImg} ${styles.secondImg}`}></div>
      </div>
    </div>
  );
};

export default Info;
