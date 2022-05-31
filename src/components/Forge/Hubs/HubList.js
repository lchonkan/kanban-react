import React from 'react';
import HubItem from './HubItem';
import Card from '../../UI/Card/Card';

import { useSelector } from 'react-redux';

import './HubsList.css';
const HubList = (props) => {
  //Using Redux for context
  const hubs = useSelector((state) => state.dataManagement.hubs);

  return (
    <Card className='hubs-list'>
      <h1>Hubs</h1>
      <ul>
        {hubs.map((hub) => (
          <HubItem name={hub.attributes.name} id={hub.id} />
        ))}
      </ul>
    </Card>
  );
};

export default HubList;
