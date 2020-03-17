import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import TrackHistory from "./containers/TrackHistory/TrackHistory";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Artists}/>
        <Route path="/registration" exact component={Registration}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/track_history" exact component={TrackHistory}/>
        <Route path="/albums/:id" component={Albums}/>
        <Route path="/tracks/:id" exact component={Tracks}/>
      </Switch>
    </div>
  );
}

export default App;
