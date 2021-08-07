import React from 'react';
import Card from '../Card/Card';
import ListItem from './ListItem';

const CollapsibleList = props => {
  return (
    <Card>
      <ul>
        {props.items.map(item => {
          return <ListItem title={item.title} description={item.description} />;
        })}
      </ul>
    </Card>
  );
};

export default CollapsibleList;
