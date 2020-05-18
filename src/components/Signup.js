import React, { useContext,useState } from "react";
import { auth, generateUserDocument } from "../firebase";
import {BrowserRouter as Router,Link} from "react-router-dom";

const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
 
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
 
  return (
    <div className="signup-forms">
      <h1>Sign Up</h1>
      <div>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <form className="">
          <label htmlFor="displayName" className="block">
            UserName:
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="knoWIT"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            className=""
            name="userEmail"
            value={email}
            placeholder="knowit@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className=""
            name="userPassword"
            value={password}
            placeholder="Enter Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button onClick={event => {createUserWithEmailAndPasswordHandler(event, email, password);}}>  
            Sign up
          </button>
        </form>
        <Router>
          <Link to="/">
            Sign in here
          </Link> 
        </Router>
          
      </div>
    </div>
  );
};
export default SignUp;