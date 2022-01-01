import React, { useContext } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AuthContext } from "./context/Auth.context";
import "./index.css";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

const App = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Router>
      {auth && <Route path={"/profile"} component={Profile} />}
      <Route path={"/login"} component={Login} />
      <Redirect to={"/login"} />
    </Router>
  );
};

export default App;
