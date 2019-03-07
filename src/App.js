import React, { Component } from 'react';
import {BrowserRouter,Router} from 'react-router-dom';
import Nav from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>
        <h1>React Task manager</h1>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
