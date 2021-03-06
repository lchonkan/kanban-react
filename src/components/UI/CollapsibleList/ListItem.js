import React from 'react';
import styles from './ListItem.module.css';

const ListItem = props => {
  return (
    <li className={styles.item}>
      <p>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
    </li>
  );
};

export default ListItem;
