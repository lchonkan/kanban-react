import React from 'react';
import styles from './ButtonAddListItem.module.css';
import addItemLogo from '../../../assets/icons/add_black_24dp.svg';

const ButtonAddListItem = props => {
  return (
    <button onClick={props.onClick} className={`${styles.button} ${props.className}`}>
      <img src={addItemLogo} alt='' />
      <p>{props.label}</p>
    </button>
  );
};

export default ButtonAddListItem;
