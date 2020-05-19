import React from 'react';
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import '../App.css';
import Modals from "./Modals";
import UserProvider from '../UserProvider';
import LoginReqs from './LoginReqs';
import SignUp from './SignUp';
import PasswordReset from './PasswordReset';
 
class Splash extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div id="splashBody">
<<<<<<< HEAD
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
=======
            <div id="logo"></div>
        <div id="navItems">

          <Router>
            <div>
              <ul>
                  <li className="navlist">
                      <Link to ="/signUp">Signup</Link>
                  </li>
                  <li className="navlist">About</li>
                  <li className="navlist">Help</li>
              </ul>
            </div>

            <Switch>
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/passwordReset" component={PasswordReset} />
            </Switch>
          </Router>
        
        </div>
            <div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1></div>
            <div><Modals/></div>
            <UserProvider>
                  <LoginReqs/>
            </UserProvider> 
>>>>>>> b912503e0a6672b2fdb4a9979873956d4fb3eddd
        </div>  
      </React.Fragment>
    );
  }
}

export default Splash;
<<<<<<< HEAD

const navItemX={

display : 'show',

}

const modalPositioning={

}
=======
>>>>>>> b912503e0a6672b2fdb4a9979873956d4fb3eddd
