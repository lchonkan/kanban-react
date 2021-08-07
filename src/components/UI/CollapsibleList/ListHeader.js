import React from 'react';
import styles from './ListHeader.module.css';
import logo from '../../../logo.svg';

export const ListHeader = props => {
  return (
    <section className={styles['container']}>
      <img className={styles.logo} src={logo} alt='' />
      <h1>{props.title}</h1>
    </section>
  );
};
