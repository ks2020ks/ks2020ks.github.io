import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import autobind from 'core-decorators/lib/autobind';
import HomePage from './HomePage.js';
import { BrowserRouter } from 'react-router-dom';

@autobind
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <HomePage />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
