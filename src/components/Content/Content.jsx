import React from 'react';
import styles from './Content.module.css';
import { Action, Stats, Info, Testimonial } from '../';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.hero}></div>
      <Action />
      <Stats />
      <Info />
      <Testimonial />
    </div>
  );
};

export default Content;
