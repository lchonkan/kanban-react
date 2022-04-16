import React, { useContext } from 'react';
import styles from './Board.module.css';
import CollapsibleList from '../UI/CollapsibleList/CollapsibleList';
import CardTransparent from '../UI/Card/CardTransparent';

//Using the context
import BoardContext from '../../context/board-context';
const Board = props => {
  const boardCtx = useContext(BoardContext);
  return (
    <div className={styles.board}>
      {boardCtx.lists.map(item => (
        <CollapsibleList
          key={item.id}
          id={item.id}
          title={item.title}
          items={item.items}
          // onUpdateList={updateListHandler}
        />
      ))}
      <CardTransparent>
        <p>+ Add another list</p>
      </CardTransparent>
    </div>
  );
};

export default Board;
