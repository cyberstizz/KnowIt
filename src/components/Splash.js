import React from 'react';
import '../App.css';
import UserProvider from '../UserProvider';
import Modals from "./Modals"; 
import LoginReqs from './LoginReqs'; //import Modals from "./Modals"; //<LoginReqs/>
 
class Splash extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div id="splashBody">
        <div id="logo"></div>

        <div id="navItems"  style={navItemX}>
          <ul>
              <li className="splashNav">Signup</li>
              <li className="splashNav">About</li>
              <li className="splashNav">Help</li>

          </ul>
        </div> 

        <div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1></div>
          <div syle={modalPositioning}> <Modals/> </div>
        <UserProvider/>
        </div>  
      </React.Fragment>
);
  }
}

export default Splash;

const navItemX={

display : 'show',

}

const modalPositioning={

}