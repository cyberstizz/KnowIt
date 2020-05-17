import React, { Component } from 'react'
import Modals from './components/Modals'
import axios from 'axios'
import Signup from './components/Signup'
import DOMp from './components/assets/DOMp'
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

