import React from 'react'
// import ReactDOM from 'react-dom'
import './App.css';
import Header from './containers/header/header';
import Financial from './components/financial/Financial';
import Service from './components/service/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Financial />
      <Service />

    </div>
  );
}

export default App;
