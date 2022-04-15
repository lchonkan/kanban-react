import React, { useState } from 'react';
import Card from '../Card/Card';
import ListItem from './ListItem';
import { ListHeader } from './ListHeader';
import ButtonAddListItem from '../Buttons/ButtonAddListItem';
import styles from './CollapsibleList.module.css';
import AddListItem from '../Input/AddListItem';
import { useCallback } from 'react/cjs/react.production.min';

const CollapsibleList = props => {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [listItems, setListItems] = useState(props.items);

  function toggleList() {
    //alert('Collapsing');
    setIsCollapsed(!isCollapsed);
  }

  const onAddItemHandler = () => {
    setIsAddingItem(true);
  };

  const onCancelFormHandler = () => {
    setIsAddingItem(false);
  };

  const onConfirmHandler = newItem => {
    setListItems(prevItems => [...prevItems, newItem]);

    props.onUpdateList();
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
          {listItems.map(item => {
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
        <ButtonAddListItem onClick={onAddItemHandler} label='Add new item' />
      )}

      {isAddingItem && !isCollapsed && (
        <AddListItem
          onConfirm={onConfirmHandler}
          onCancel={onCancelFormHandler}
        />
      )}
    </Card>
  );
};

export default CollapsibleList;
