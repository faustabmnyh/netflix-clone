import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import SignIn from "./Component/SignIn";
import Register from "./Component/Register";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./config/firebase";
import Home from "./pages/Home";
import SelectProfile from "./pages/SelectProfile";
import Login from "./pages/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      if (auth) {
        dispatch({
          type: "SET_USER",
          user: auth,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Profile */}
          <Route path="/profile">
            <SelectProfile user={user} />
          </Route>

          {/* Register */}
          <Route path="/register">
            <Register />
            <Footer />
          </Route>

          {/* SignIn */}
          <Route path="/signin">
            <SignIn />
            <Footer />
          </Route>

          {/* home */}
          <Route path="/home">
            <Home />
          </Route>

          {/* login */}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
