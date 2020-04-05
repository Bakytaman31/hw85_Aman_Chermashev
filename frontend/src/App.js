import React from 'react';
import './App.css';
import NavBar from "./components/UI/NavBar/NavBar";
import Routes from "./Routes";
import {Container} from "reactstrap";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
        <ToastContainer autoClose={3000}/>
        <header>
            <NavBar/>
        </header>
        <Container className="container">
            <Routes/>
        </Container>
    </div>
  );
}

export default App;
