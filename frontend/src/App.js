import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Artists}/>
            <Route path="/albums/:id" component={Albums}/>
        <Route path="/tracks/:id" exact component={Tracks}/>
      </Switch>
    </div>
  );
}

export default App;
