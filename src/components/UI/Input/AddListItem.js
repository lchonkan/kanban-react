import React, { useRef, useContext } from 'react';
import Card from '../Card/Card';
import classes from './AddListItem.module.css';
import Button from '../Buttons/Button';

//using Redux
import { useDispatch } from 'react-redux';
import { listItemActions } from '../../../store/items-slice';

function AddListItem(props) {
  //using redux
  const dispatch = useDispatch();

  //Using references for the inputs
  const titleInputRef = useRef();

  const addItemHandler = event => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;

    const newListItem = {
      listId: props.currentList,
      id: Math.random().toString(),
      title: enteredTitle,
      description: '',
    };

    dispatch(listItemActions.createListItem(newListItem));
    props.onConfirm(); // this sets the state of the list to not editing
  };
  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addItemHandler}>
          <input placeholder='Enter Title' id='title' type='text' ref={titleInputRef}></input>
        </form>
      </Card>
      <div className={classes.controls}>
        <Button onClick={addItemHandler} type='submit'>
          Add Item
        </Button>
        <Button onClick={props.onCancel} type='cancel'>
          X
        </Button>
      </div>
    </>
  );
}

export default AddListItem;
