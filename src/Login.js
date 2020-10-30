import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();
const signIn = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        if(auth){
            history.push("/");
        }
    })
    .catch(error => console.log(alert(error.message)));
}
const register = e => {
    console.log("register");
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            if(auth){
                history.push("/");
            }
        })
        .catch(error => console.log(alert(error.message)));
}


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="data:image/jpeg;base64,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"
        />
      </Link>

      <div className="login_container">
          <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setemail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setpassword(e.target.value)}/>
          <button type="submit" className="login_signInBtn" onClick={signIn} >Sign in</button>
        </form>

        <p>By continuing, you agree to FAKE Amazon CLONE Conditions of Use and Privacy Notice.</p>

        <button onClick={register} className="login_signUpBtn">Create a new account</button>
      </div>
    </div>
  );
}

export default Login;
