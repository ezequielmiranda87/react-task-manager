import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
// Switch Make sure  that only one route is loaded up at time
import Nav from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>

        <Switch>
          <Route path="/" component= {Dashboard}/>
        </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
