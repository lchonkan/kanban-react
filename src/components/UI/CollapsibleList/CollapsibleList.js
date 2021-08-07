import React from 'react';
import Card from '../Card/Card';
import ListItem from './ListItem';
import { ListHeader } from './ListHeader';
import styles from './CollapsibleList.module.css'

const CollapsibleList = props => {
  return (
    <Card >
    <ListHeader title={props.title}/>
      <ul className={styles.container}>
        {props.items.map(item => {
          return <ListItem key={item.title} title={item.title} description={item.description} />;
          
        })}
      </ul>
    </Card>
  );
};

export default CollapsibleList;
