import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import {projects as Projects} from './components/Projects';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {

  state = {
    loggedIn:true
  }

  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />


          <Route exact path='/about' 
          render={() => (
 this.state.loggedIn ? (
    <About/>
  ) : (
    <Redirect to ="/"></Redirect>
  )
)} 
          // component={About} 

          />
        </Switch>
      </div>
    );
  }
}

export default App;
