import React from 'react';
import styles from './Card.module.css';

const CardTransparent = props => {
  return <div className={styles.transparent}>{props.children}</div>;
};

export default CardTransparent;
