import React from 'react';
import './App.css';
import NavBar from "./components/UI/NavBar/NavBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes/>
    </div>
  );
}

export default App;
