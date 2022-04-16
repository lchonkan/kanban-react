import React, { useRef, useContext } from 'react';
import Card from '../Card/Card';
import classes from './AddListItem.module.css';
import Button from '../Buttons/Button';

//Using the context
import BoardContext from '../../../context/board-context';

function AddListItem(props) {
  const boardCtx = useContext(BoardContext);
  //Using references for the inputs
  const titleInputRef = useRef();

  const addItemHandler = event => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;

    const newItem = {
      list_id: props.currentList,
      id: Math.random().toString(),
      title: enteredTitle,
      description: '',
    };
    boardCtx.addItem(newItem);
    props.onConfirm(); // this sets the state of the list to not editing
  };
  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addItemHandler}>
          <input
            placeholder='Enter Title'
            id='title'
            type='text'
            ref={titleInputRef}
          ></input>
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
