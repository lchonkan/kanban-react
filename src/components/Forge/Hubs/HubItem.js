import React from 'react';
import './HubItem.css';

const HubItem = (props) => {
  return (
    <div className='hub-item'>
      <h3>{props.name}</h3>
      <p>{props.id}</p>
    </div>
  );
};

export default HubItem;
