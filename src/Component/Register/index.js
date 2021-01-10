import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";
import "./Register.css";

function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "" || username === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          displayName: username,
          photoURL: Math.floor(Math.random() * 3) + 1,
        });
      })
      .then(() => {
        history.push("/profile");
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <div className="register">
      <div className="register__nav">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
      </div>
      <div className="register__container">
        <h1>Sign Up</h1>
        <form>
          {error && <p className="register__error">{error}</p>}
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
        </form>

        <div className="register__fb">
          <img
            src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png"
            alt="facebook"
          />
          <p>Sign up with Facebook</p>
        </div>

        <h3>
          Alredy have an account?{" "}
          <Link to="/signin" className="register__signin">
            Sign In Now
          </Link>{" "}
        </h3>

        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link className="register__more">Learn more.</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
