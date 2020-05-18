import React from 'react';
import '../App.css'
import Modals from "./Modals";
import UserProvider from '../UserProvider'
import LoginReqs from './LoginReqs'
 class Splash extends React.Component{

  render(){
  return (
<div id="splashBody">
<div id="logo"></div>
<div id="navItems">
    
   
    <ul>
        <li className="navlist">Signup</li>
        <li className="navlist">About</li>
        <li className="navlist">Help</li>

    </ul>
     
   
</div>
<div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1><Modals/></div>


    <UserProvider>
     <LoginReqs/>
    </UserProvider> 
</div>  
);
  }
}

export default Splash;
