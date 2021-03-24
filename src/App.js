import React, { useState } from 'react'

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Keepnote from "./Keep_note";
import Login from "./Loginpage";

function App() {
  const [username, setUsername] = useState("User");
  const [password, setpassword] = useState();
  const [bool, setbool] = useState(false);
  const loginfo = (logininfo) => {
    setUsername(logininfo.user);
    setpassword(logininfo.pass);
    setbool(true);
  };
  return (
    <>
      {bool === false ? (
        <Login loginFormName={loginfo} 
        />
      ) : (
        <>
          <Header user={username}
              pass={password}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/keepnote" component={Keepnote} />
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
