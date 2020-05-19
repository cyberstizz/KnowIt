import React from 'react';
<<<<<<< HEAD
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import '../App.css'
import Modals from "./Modals";
import UserProvider from '../UserProvider'
import LoginReqs from './LoginReqs'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset';
=======
import '../App.css';
import UserProvider from '../UserProvider';
import Modals from "./Modals"; 
import LoginReqs from './LoginReqs'; //import Modals from "./Modals"; //<LoginReqs/>
>>>>>>> 26b70f8cabc36c33321340fbeda04a896aae54df
 
class Splash extends React.Component{

  render(){
<<<<<<< HEAD
  return (
<div id="splashBody">
<div id="logo"></div>
<div id="navItems">
    
   <Router>
    <ul>
        <li className="navlist">
            <Link to ="/signUp">Signup</Link>
        </li>
        <li className="navlist">About</li>
        <li className="navlist">Help</li>
    </ul>
   
    <Switch>
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/passwordReset" component={PasswordReset} />
     </Switch>
   </Router>
</div>
<div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1><Modals/></div>


    <UserProvider>
     <LoginReqs/>
    </UserProvider> 
</div>  
=======
    return (
      <React.Fragment>
        <div id="logo"></div>
        <div id="splashBody">
        
        <div id="navItems"  style={navItemX}>
          <ul>
              <li className="navlist">Signup</li>
              <li className="navlist">About</li>
              <li className="navlist">Help</li>

          </ul>
        </div> 

        <div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1></div>
          <div syle={modalPositioning}> <Modals/> </div>
        <UserProvider/>
        </div>  
      </React.Fragment>
>>>>>>> 26b70f8cabc36c33321340fbeda04a896aae54df
);
  }
}

export default Splash;

const navItemX={

display : 'none',

}

const modalPositioning={

}