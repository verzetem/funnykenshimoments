import React, { Component } from 'react';
import './App.scss';

import Navbar from './components/Navbar'
import Content from './components/Content'

class App extends Component {

  render() {

    return (

      <div>
        <Navbar />
        <Content />

      </div>

    );
  }
}

export default App;
