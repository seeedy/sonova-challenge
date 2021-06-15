import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  const tiles = [
    {
      percent: '97%',
      text: 'sed diam nonumy eirmod',
    },
    {
      percent: '95%',
      text: 'tempor invidunt ut labore',
    },
    {
      percent: '66%',
      text: 'in hendrerit in vulputate velit esse molestie consequa',
    },
    {
      percent: '61%',
      text: 'vel illum dolore eu feugiat nulla facilisis at vero',
    },
    {
      percent: '56%',
      text: 'et accumsan et iusto odio dignissim qui blandit praesent',
    },
  ];
  return (
    <div className={styles.stats}>
      <h2 className={styles.title}>Ut wisi enim ad minim veniam</h2>
      <div className={styles.tiles}>
        {tiles.map((tile) => (
          <div className={styles.tile}>
            <h1 className={styles.percent}>{tile.percent}</h1>
            <div className={styles.tileText}>{tile.text}</div>
          </div>
        ))}
        <div className={styles.tile}>*Eurotrak 2018</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoImg}></div>
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
      <div className={styles.info}>
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
        <div className={styles.infoImg}></div>
      </div>
    </div>
  );
};

export default Stats;
