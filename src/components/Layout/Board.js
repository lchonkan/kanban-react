import React, { useContext } from 'react';
import styles from './Board.module.css';
import CollapsibleList from '../UI/CollapsibleList/CollapsibleList';
import CardTransparent from '../UI/Card/CardTransparent';

// using the slice from the store to get the current lists.
import { useSelector } from 'react-redux';

//Using the context
import BoardContext from '../../context/board-context';

const Board = props => {
  const lists = useSelector(state => state.lists.items);
  const listItems = useSelector(state => state.listItems.listItems);
  console.log(lists);
  console.log(listItems);

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
