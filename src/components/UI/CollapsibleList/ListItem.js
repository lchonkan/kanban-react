import React from 'react';
import styles from './ListItem.module.css';
import Card from '../Card/Card';

const ListItem = props => {
  return (
    <li className={styles.item}>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </li>
  );
};

export default ListItem;
