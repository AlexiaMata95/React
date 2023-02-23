import './App.css';
import Hello from './Components/hello'
import Padre from './Components/padre'
import Counter from './Components/Counter';

function App() {
  const handleClick = () =>{
    console.log('Click!')
  }
  return (
    <div className="App">
      
        <Hello name='Alo'/>
        <Padre/>
        <Counter/>
        <button onClick={()=>handleClick}>Click me!</button>
    </div>
    
  );
}

export default App;
