import './App.css';
import Board from './components/Layout/Board';

//Importing the state provider
import BoardProvider from './context/BoardProvider';

function App() {
  return (
    <div className='App'>
      <BoardProvider>
        <Board></Board>
      </BoardProvider>
    </div>
  );
}

export default App;
