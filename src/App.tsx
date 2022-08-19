import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.REACT_APP_API}</h1>
      </header>
    </div>
  );
}

export default App;
