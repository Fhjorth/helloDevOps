import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import withRouter from "react-router-dom/es/withRouter";
import GiraffeStore from "./stores/GiraffeStore";

const giraffeStore = new GiraffeStore();

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
          <div>
              <Button variant="primary">CLICK</Button>
          </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Switch>
              {/*<Route path={"/about"} component={About}/>*/}
              <Route exact path={"/"} render={()=> <h1>Startside</h1>}/>
              <Route render={()=> <h1>404</h1>}/>
              <Route path={"/about/:text"} component={About}/>
          </Switch>

          <ul>
              {giraffeStore.giraffes.map((giraffeName,key)=>
              <li key={key}>{giraffeName}</li>
              )}
          </ul>
          <Button onclick={()=>giraffeStore.giraffes.push("Elmer")}>Tilføj giraf</Button>
      </header>
    </div>
  );
}

const About = withRouter(({history,match})=>{
    console.log(history);
    console.log(match);
    return <div>
        <h1>About {match.params.text}</h1>
        <Button onClick={()=>history.push("/")}>Go to front</Button>
    </div>
});

export default App;
