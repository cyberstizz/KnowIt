import React from 'react';
import './App.css';

 export class Charles extends React.Component{

   collapse = () =>{
    document.getElementById('Charles').style.visibility = 'hidden';
  };
  extend = () =>{
    document.getElementById('Charles').style.visibility = 'visible';
  };
  render(){
   
    
  return (
    <React.Fragment>
    <div id="hiddenHamburgerMenu" onClick={this.extend}>
    <span id="hiddenHamburgerMenuItems"></span>
    <span id="hiddenHamburgerMenuItems"></span>
    <span id="hiddenHamburgerMenuItems"></span>
  </div>
    <div id="Charles">
      <div id="extendedHamburgerMenu" onClick={this.collapse}>
        <span id="extendedHamburgerMenuItems"></span>
        <span id="extendedHamburgerMenuItems"></span>
        <span id="extendedHamburgerMenuItems"></span>
      </div>
         
      <div id="userPic"></div>
      <ul>
      <div id="mainButtons">
        <ul>
          <li>Study</li>
          <li>Create</li>
          <li>Edit</li>
          <li>Delete</li>
          <li>Sign out</li>
        </ul>
      </div>
      <div id="bottomButtons"></div>
      </ul>
  
    </div>
    </React.Fragment>

  );
  }
}

export default Charles;
