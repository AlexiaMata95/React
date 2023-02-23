import logo from './logo.svg';
import './App.css';
import Hello from './Components/hello'
import Padre from './Components/padre';

function App() {
  const handleClick = () =>{
    console.log('Click!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello name='Alo'/>
        <Padre/>
        <button onClick={()=>console.log('Hiciste click!')}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
