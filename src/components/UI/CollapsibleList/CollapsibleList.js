import React, { useState, useContext } from 'react';
import Card from '../Card/Card';
import ListItem from './ListItem';
import { ListHeader } from './ListHeader';
import ButtonAddListItem from '../Buttons/ButtonAddListItem';
import styles from './CollapsibleList.module.css';
import AddListItem from '../Input/AddListItem';

//Using the context
import BoardContext from '../../../context/board-context';

// using the slice from the store to get the current list items.
import { useSelector } from 'react-redux';

const CollapsibleList = props => {
  //using the context
  const boardCtx = useContext(BoardContext);

  //using redux
  const listItems = useSelector(state => state.listItems.listItems);
  console.log(listItems);
  const currentListItems = listItems.filter(item => item.listId === props.id);
  console.log('From Redux', currentListItems);

  const currentListId = props.id;
  const currentListIndex = boardCtx.lists.findIndex(list => list.id === currentListId);
  const currentListElement = boardCtx.lists[currentListIndex];

  console.log('Rendering List', currentListElement);

  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleList() {
    setIsCollapsed(!isCollapsed);
  }

  const toggleForm = () => {
    setIsAddingItem(true);
  };

  const onCancelFormHandler = () => {
    setIsAddingItem(false);
  };

  const onConfirmHandler = newItem => {
    setIsAddingItem(false);
  };

  return (
    <Card>
      {/* The list header is always visible */}
      <ListHeader onClick={toggleList} title={props.title} vertical={isCollapsed} />
      {/* Rendering the list items conditionally (only if the list is not collapsed) */}
      {!isCollapsed && (
        <ul className={styles.container}>
          {currentListItems.map(item => {
            return <ListItem key={item.title} title={item.title} description={item.description} />;
          })}
        </ul>
      )}

      {!isCollapsed && !isAddingItem && <ButtonAddListItem onClick={toggleForm} label='Add new item' />}

      {isAddingItem && !isCollapsed && (
        <AddListItem currentList={currentListId} onConfirm={onConfirmHandler} onCancel={onCancelFormHandler} />
      )}
    </Card>
  );
};

export default CollapsibleList;
