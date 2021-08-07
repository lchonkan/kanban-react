import './App.css';
import CollapsibleList from './components/UI/CollapsibleList/CollapsibleList';
import Board from './components/Layout/Board';

function App() {
  const DUMMY_ITEMS1 = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'this is the end of it' },
  ];
  const DUMMY_ITEMS2 = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'Description 3' },
    { title: 'Item 4', description: 'this is the end of it' },
  ];

  return (
    <div className='App'>
      <Board>
        <CollapsibleList title='Sample Title' items={DUMMY_ITEMS1} />
        <CollapsibleList title='Sample Title' items={DUMMY_ITEMS2} />
      </Board>
    </div>
  );
}

export default App;
