import './App.css';
import CollapsibleList from './components/UI/CollapsibleList/CollapsibleList';
import Board from './components/Layout/Board';
import ButtonAddListItem from './components/UI/Buttons/ButtonAddListItem';
import CardTransparent from './components/UI/Card/CardTransparent';

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
        <CollapsibleList title='Backlog' items={DUMMY_ITEMS1} />
        <CollapsibleList title='Sprint' items={DUMMY_ITEMS2} />
        <CollapsibleList title='Done' items={DUMMY_ITEMS2} />
        <CardTransparent>
          <p>+ Add another list</p>
        </CardTransparent>
      </Board>
    </div>
  );
}

export default App;
