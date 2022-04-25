import React, { useRef, useState } from 'react';
import Card from '../Card/Card';
import classes from './AddListItem.module.css';
import Button from '../Buttons/Button';
import addItemLogo from '../../../assets/icons/add_black_24dp.svg';

//using Redux
import { useDispatch } from 'react-redux';
import { listActions } from '../../../store/lists-slice';
import ButtonAddListItem from '../Buttons/ButtonAddListItem';

const AddList = props => {
  //using redux
  const dispatch = useDispatch();

  const [isAddingItem, setIsAddingItem] = useState(false);

  //Using references for the inputs
  const titleInputRef = useRef();

  const addItemHandler = event => {
    // alert('adding item');
    // event.preventDefault();
    const enteredTitle = titleInputRef.current.value;

    const newList = {
      id: Math.random().toString(),
      boardId: 'b01',
      title: enteredTitle,
    };
    dispatch(listActions.addList(newList));
    //props.onConfirm(); // this sets the state of the list to not editing
  };

  const onCancelFormHandler = () => {
    setIsAddingItem(false);
  };

  // const onBlurHandler = event => {
  //   event.preventDefault();
  //   setIsAddingItem(false);
  // };

  const activateForm = () => {
    setIsAddingItem(true);
  };

  const onConfirmHandler = newItem => {
    addItemHandler();
    // setIsAddingItem(false);
  };

  let content = isAddingItem && (
    <div className={classes.container}>
      <Card className={classes.input}>
        <form>
          <input placeholder='Enter Title' id='title' type='text' ref={titleInputRef}></input>
        </form>
      </Card>
      <div className={classes.controls}>
        <Button onClick={addItemHandler} type='submit'>
          Add Item
        </Button>
        <Button onClick={onCancelFormHandler} type='cancel'>
          X
        </Button>
      </div>
    </div>
  );

  if (!isAddingItem) {
    content = (
      <div className={classes.transparent}>
        <span>
          <button onClick={activateForm}>
            <img src={addItemLogo} alt='' />
            <p>Create New List</p>
          </button>
        </span>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default AddList;
