import React, { useContext } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { UserContext } from "../UserProvider"
// import SignIn from "./SignIn";
import SignUp from './SignUp';
import Profile from "./Profile";
import PasswordReset from "./PasswordReset";

function LoginReqs() {
  const user = useContext(UserContext);
  return (
        user ?
        <Profile />
       :
       
        <Router>
          {/* <SignUp path="signUp" />
         
          <PasswordReset path = "passwordReset" /> */}
        </Router>

  );
}
export default LoginReqs;