import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ingresa a <code>BC - Ventas</code> para ver nuestra página.
        </p>
        <a
          className="App-link"
          href="https://borischoque.github.io/proyecto_ch_bchoque/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BC - VENTAS
        </a>
      </header>
    </div>
  );
}

export default App;
