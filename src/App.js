import logo from './logo.svg';
import './App.css';
import CollapsibleList from './components/UI/CollapsibleList/CollapsibleList';
function App() {
  const DUMMY_ITEMS = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'this is the end of it' },
  ];

  return (
    <div className='App'>
      <CollapsibleList title='Sample Title' items={DUMMY_ITEMS} />
      <CollapsibleList title='Sample Title' items={DUMMY_ITEMS} />
    </div>
  );
}

export default App;
