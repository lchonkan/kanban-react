import React from 'react';
import Card from '../Card/Card';
import classes from './AddListItem.module.css';
import Button from '../Buttons/Button';

function AddListItem(props) {
  return (
    <>
      <Card className={classes.input}>
        <form>
          <input placeholder='Enter Title' id='title' type='text'></input>
        </form>
      </Card>
      <div className={classes.controls}>
        <Button onClick={props.onConfirm} type='submit'>
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
