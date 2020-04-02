import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import './styles.css';

function App() {
  return (
    <div className='App'>
      <h1> Hello World! </h1>
    </div>
  );
}

export default App;
