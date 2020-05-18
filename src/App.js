import React, { Component } from 'react';
import Modals from './components/Modals';
import DOMp from './components/assets/DOMp';
import Cards from './components/assets/Cards';

export default class App extends Component {

 
  render() {
    return (
      <React.Fragment>
        <Modals/>
        <DOMp/>
      </React.Fragment>  
    )
  }
}