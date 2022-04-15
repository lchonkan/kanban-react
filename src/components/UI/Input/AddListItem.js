import React, { useState, useRef } from 'react';
import Card from '../Card/Card';
import classes from './AddListItem.module.css';
import Button from '../Buttons/Button';

function AddListItem(props) {
  //Using references for the inputs
  const titleInputRef = useRef();

  const [error, setError] = useState(false);

  const addItemHandler = event => {
    // alert('clicked');
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    // console.log(enteredTitle);
    const newItem = {
      id: Math.random().toString(),
      title: enteredTitle,
      description: '',
    };
    props.onConfirm(newItem);
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
