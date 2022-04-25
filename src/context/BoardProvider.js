import React, { useReducer } from 'react';
import BoardContext from './board-context';

const defaultBoardState = {
  lists: [
    {
      id: 'l01',
      title: 'Backlog',
      items: [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'this is the end of it' },
      ],
    },
    {
      id: 'l02',
      title: 'Sprint',
      items: [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'this is the end of it' },
      ],
    },
    {
      id: 'l03',
      title: 'Done',
      items: [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'this is the end of it' },
      ],
    },
  ],
};

const boardReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    console.log('Adding item to list', action.item);
    //get current list from state
    const curentListIndex = state.lists.findIndex(list => list.id === action.item.list_id);
    const currentList = state.lists[curentListIndex];
    const updatedListItems = currentList.items.concat(action.item);

    let currentState = state.lists;
    //Updated the items for the current list.
    currentState[curentListIndex].items = updatedListItems;
    //update the state
    return { lists: currentState };
  }
  if (action.type === 'REMOVE_ITEM') {
    alert('Removing item');
  }
  return defaultBoardState;
};

const BoardProvider = props => {
  //Using the reducer
  const [boardState, dispatchBoard] = useReducer(boardReducer, defaultBoardState);

  //Defining event handlers for the add/remove functions
  const addItemToListHandler = item => {
    dispatchBoard({ type: 'ADD_ITEM', item: item });
  };
  const removeItemFromListHandler = () => {};

  //Defining the initial state of the board
  const boardContext = {
    lists: boardState.lists,
    addItem: addItemToListHandler,
    removeItem: removeItemFromListHandler,
  };

  return <BoardContext.Provider value={boardContext}>{props.children}</BoardContext.Provider>;
};

export default BoardProvider;
