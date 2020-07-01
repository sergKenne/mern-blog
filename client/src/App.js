import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      Hello world<br/>
      <button className="btn btn-success">Close</button>
      <Footer/> 
    </div>
  );
}

export default App;
