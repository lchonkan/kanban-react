import React from 'react';
import styles from './ListHeader.module.css';
import logo from '../../../assets/icons/expand_more_black_24dp.svg';
import expandLogo from '../../../assets/icons/more_horiz_black_24dp.svg';

export const ListHeader = props => {
  return (
    <section className={styles['container']}>
      <img className={styles.logo} src={logo} alt='' />
      <h1>{props.title}</h1>
      <img src={expandLogo} className={styles.logoexpand} alt='' />
    </section>
  );
};
