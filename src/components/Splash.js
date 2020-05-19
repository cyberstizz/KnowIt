import React from 'react';
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import '../App.css';
import Modals from "./Modals";
// import UserProvider from '../UserProvider';
// import LoginReqs from './LoginReqs';
import SignUp from './SignUp';
import PasswordReset from './PasswordReset';
// import DOMp from './assets/DOMp';
 
class Splash extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div id="splashBody">
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
                  {/* <li className="navlist">
                      <Link to ="/domp">Display Portal</Link>
                  </li> */}
              </ul>
            </div>

            <Switch>
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/passwordReset" component={PasswordReset} />
              {/* <Route exact path="/domp" component={DOMp} /> */}

            </Switch>
          </Router>
        
        </div>
            <div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1></div>
            <div><Modals/></div>
            {/* <UserProvider>
                  <LoginReqs/>
            </UserProvider>  */}
        </div>  
      </React.Fragment>
    );
  }
}

export default Splash;
