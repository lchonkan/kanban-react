import React, { useState, useContext } from 'react';
import Card from '../Card/Card';
import ListItem from './ListItem';
import { ListHeader } from './ListHeader';
import ButtonAddListItem from '../Buttons/ButtonAddListItem';
import styles from './CollapsibleList.module.css';
import AddListItem from '../Input/AddListItem';

//Using the context
import BoardContext from '../../../context/board-context';

const CollapsibleList = props => {
  const boardCtx = useContext(BoardContext);

  const currentListId = props.id;
  const currentListIndex = boardCtx.lists.findIndex(
    list => list.id === currentListId
  );
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
      <ListHeader
        onClick={toggleList}
        title={props.title}
        vertical={isCollapsed}
      />
      {/* Rendering the list items conditionally (only if the list is not collapsed) */}
      {!isCollapsed && (
        <ul className={styles.container}>
          {currentListElement.items.map(item => {
            return (
              <ListItem
                key={item.title}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </ul>
      )}

      {!isCollapsed && !isAddingItem && (
        <ButtonAddListItem onClick={toggleForm} label='Add new item' />
      )}

      {isAddingItem && !isCollapsed && (
        <AddListItem
          currentList={currentListId}
          onConfirm={onConfirmHandler}
          onCancel={onCancelFormHandler}
        />
      )}
    </Card>
  );
};

export default CollapsibleList;
