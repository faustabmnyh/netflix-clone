import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const isInvalid = password === "" || email === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/profile");
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  auth.onAuthStateChanged((auth) => {
    if (auth) {
      history.push("/profile");
    }
  });

  return (
    <div className="signin">
      <div className="signin__nav">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
      </div>
      <div className="signin__container">
        <h1>Sign In</h1>
        <form>
          {error && <p className="signin__error">{error}</p>}
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit} disabled={isInvalid}>
            Sign In
          </button>
          <div className="signin__formText">
            <label className="signin__remember">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <label>Remember Me</label>
            </label>
            <Link className="signin__help">Need help?</Link>
          </div>
        </form>

        <div className="signin__fb">
          <img
            src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png"
            alt="facebook"
          />
          <p>Login with Facebook</p>
        </div>

        <h3>
          New to Netflix?{" "}
          <Link to="/register" className="signin__signup">
            Sign up now
          </Link>{" "}
        </h3>

        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link className="signin__more">Learn more.</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
