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
      <div className={styles.title}>
        <h2>Ut wisi enim ad minim veniam</h2>
      </div>
      <div className={styles.tiles}>
        {tiles.map((tile, idx) => (
          <div className={styles.tile} key={idx}>
            <h1 className={styles.percent}>{tile.percent}</h1>
            <div className={styles.tileText}>{tile.text}</div>
          </div>
        ))}
        <div className={styles.tile}>*Eurotrak 2018</div>
      </div>
    </div>
  );
};

export default Stats;
