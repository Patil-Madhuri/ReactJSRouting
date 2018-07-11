import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link }from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({match}) =>{
  return (
    <h1>Welcome {match.params.username}</h1>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Route path="/" exact={true} render={()=>{return (<h1>Home</h1>);}} />
        <Route path="/about" exact={true} render={()=>{return (<h1>About</h1>);}} />
        <Route path="/contact" exact={true} render={()=>{return (<h1>Contact</h1>);}} />
        <Route path="/user/:username" exact={true} component={User}/>

   <Route path="/user" exact={true} component={User}/>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/user">User</Link>

      </div>
      </Router>
    );
  }
}

export default App;
