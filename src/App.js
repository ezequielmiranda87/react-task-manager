import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
// Switch Make sure  that only one route is loaded up at time
import Nav from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/project/ProjectDetails';
import SignIn from './components/auth/SigIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>

        <Switch>
          <Route exact path="/" component= {Dashboard}/>
          <Route path = "/project/:id" component = {ProjectDetail}/>
          <Route path = "/signin/" component = {SignIn}/>
          <Route path = "/signup/" component = {SignUp}/>
          <Route path = "/create/" component = {CreateProject}/>
        </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
