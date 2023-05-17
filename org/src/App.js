import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/img/header.png" alt="Org"></img>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo con react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Aprende con React
        </a>
      </header>
    </div>
  );
}

export default App;
