import React, { useState, useMemo, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context } from "./components/Context";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Restricted from "./pages/Restricted";
import { ProtectedRoute } from "./Protected.Route";

function App() {
  const [value, setValue] = useState();
  const val = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <>
      <Router>
        <Switch>
          <Context.Provider value={val}>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/main" component={Main} />
            <Route path="*" component={Restricted} />
          </Context.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
