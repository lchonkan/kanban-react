import React from 'react';
import styles from './Board.module.css';

const Board = props => {
  return <div className={styles.board}>{props.children}</div>;
};

export default Board;
