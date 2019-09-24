import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>HEJ</h3>
        <h2>igen</h2>
        <div>
          <InputGroup className="mb-3">
           <InputGroup.Prepend>
             <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
           </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
