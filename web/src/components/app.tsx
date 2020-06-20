import React, { FC } from "react";
import SessionForm from "./session_form";
import { Switch, Route, HashRouter } from "react-router-dom";

const App: FC = () => {
  return <HashRouter>
    <Switch>
      <Route exact path="/login"><SessionForm type="login" /></Route>
      <Route exact path="/signup"><SessionForm type="signup" /></Route>
    </Switch>
  </HashRouter>
}

export default App;
