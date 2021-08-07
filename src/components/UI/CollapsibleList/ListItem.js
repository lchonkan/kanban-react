import React from 'react';
import styles from './ListItem.module.css';
import Card from '../Card/Card';

const ListItem = props => {
  return (
    <li className={styles.item}>
      <Card>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Card>
    </li>
  );
};

export default ListItem;
