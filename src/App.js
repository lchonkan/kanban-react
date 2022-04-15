import './App.css';
import CollapsibleList from './components/UI/CollapsibleList/CollapsibleList';
import Board from './components/Layout/Board';
import CardTransparent from './components/UI/Card/CardTransparent';
import { useState } from 'react';

function App() {
  const DUMMY_ITEMS = [
    {
      title: 'Backlog',
      items: [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'this is the end of it' },
      ],
    },
    {
      title: 'Sprint',
      items: [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'this is the end of it' },
      ],
    },
    {
      title: 'Done',
      items: [
        { title: 'Item 1', description: 'Description 1' },
        { title: 'Item 2', description: 'Description 2' },
        { title: 'Item 3', description: 'this is the end of it' },
      ],
    },
  ];

  const updateListHandler = item => {
    console.log('Updated');
  };

  const [items, setItems] = useState(DUMMY_ITEMS);

  return (
    <div className='App'>
      <Board>
        {items.map(item => (
          <CollapsibleList
            key={Math.random().toString()}
            title={item.title}
            items={item.items}
            onUpdateList={updateListHandler}
          />
        ))}
        <CardTransparent>
          <p>+ Add another list</p>
        </CardTransparent>
      </Board>
    </div>
  );
}

export default App;
