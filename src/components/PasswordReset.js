import React, { useState , useContext} from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import { UserContext } from "../UserProvider"
import { auth } from "../firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  
  const sendResetEmail = event => {
    event.preventDefault();

    auth
    .sendPasswordResetEmail(email)
    .then(() => {
      setEmailHasBeenSent(true);
      setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
    })
    .catch(() => {
      setError("Error resetting password");
    });
  };
 
 
  return (
    <div>
      <h1>
        Reset your Password
      </h1>
      <div>
        <form action="">
          {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}/>
          <button onClick={event => {sendResetEmail(event); }}>
            Send me a reset link
          </button>
        </form>
        <Router>
          <Link to ="/">
          &larr; back to sign in page
          </Link>
        </Router>
        
      </div>
    </div>
  );
};
export default PasswordReset;