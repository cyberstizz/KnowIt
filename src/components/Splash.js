import React from 'react';
import './App.css';

 class Splash extends React.Component{

  render(){
  return (
<div id="splashBody">
<div id="logo"></div>
<div id="navItems">
    <div>Signup</div>
    <div>About</div>
    <div>Help</div>

</div>
<div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1></div>
<button id="signInButton">Get started   <span id="arrow">&#10132;</span></button>

<div></div>


</div>  
);
  }
}

export default Splash;
