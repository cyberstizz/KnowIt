import React, { Component } from 'react'
import Modal from './components/Modals'

import axios from 'axios'
import Signup from './components/Signup'
import DOMp from './components/assets/DOMp'
export default class App extends Component {

 
  render() {
    return (
      <div>
        <Modal/>
      </div>
      <React.Fragment>
        <Signup />
        {/* <div>
          <ul>
            {this.state.data.map((recipe, id) => <h4 key={id}> {recipe.title} </h4>)}
          </ul>
        </div> */}
        <DOMp/>
      </React.Fragment>  
    )
  }
}

