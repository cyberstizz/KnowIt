import React from 'react';
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import '../App.css'
import Modals from "./Modals";
import UserProvider from '../UserProvider'
import LoginReqs from './LoginReqs'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset';
 
class Splash extends React.Component{

  render(){
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
);
  }
}

export default Splash;