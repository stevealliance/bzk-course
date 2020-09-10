import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './List'


function App() {

  const guy = "hey I love coding"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Felix name="steve" />
        <p>
          Edit <code>src/App.js</code> {guy}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Lists />
    </div>
  );
}

function Felix(props){
    const guy = "Hey"
    return (
        <div>
            <h1>Name: {props.name}</h1>
        </div>
    )
}

export default App;
