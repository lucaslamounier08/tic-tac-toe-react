import Game from './components/Game';

function App() {
  return (
    <>
      <div>

        <header className="App-header">
          <h1>Tic Tac Toe</h1>
        </header>

        <p>This is a simple implementation of Tic Tac Toe using React Native.</p>
        <p>Welcome to Tic Tac Toe!</p>
        <p>Instructions: Click on a cell to mark your move.</p>
        <p>The first player to get three of their marks in a row, column, or diagonal wins!</p>
        <p>Good luck!</p>
      </div>

      <div className="App">
        <Game />
      </div>

      <footer>
        <p>Created by Lucas Faria</p>
        <p>Last updated: October 15, 2022</p>
      </footer>
    </>
  );
}

export default App;