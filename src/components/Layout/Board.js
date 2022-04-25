import React from 'react';
import styles from './Board.module.css';
import cardStyles from '../UI/Card/Card.module.css';
import CollapsibleList from '../UI/CollapsibleList/CollapsibleList';

import Card from '../UI/Card/Card';

// using the slice from the store to get the current lists.
import { useSelector } from 'react-redux';
import ButtonAddListItem from '../UI/Buttons/ButtonAddListItem';
import AddListItem from '../UI/Input/AddListItem';
import AddList from '../UI/Input/AddList';

const Board = props => {
  const lists = useSelector(state => state.lists.items);
  const listItems = useSelector(state => state.listItems.listItems);
  console.log(lists);
  console.log(listItems);

  const addListHandler = () => {
    console.log('Adding List');
  };

  return (
    <div className={styles.board}>
      {lists.map(item => (
        <CollapsibleList key={item.id} id={item.id} title={item.title} />
      ))}
      <AddList></AddList>
    </div>
  );
};

export default Board;
