import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/index.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
      <BrowserRouter >
        <Header /> 
      </BrowserRouter> 
    )
  }
}