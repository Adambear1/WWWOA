import React, { useState, useMemo, useCotnext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context } from "./components/Context";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Restricted from "./pages/Restricted";
import { ProtectedRoute } from "./Protected.Route";

function App() {
  const [value, setValue] = useState();
  const val = useMemo(() => ({ value, setValue }), [value, setValue]);
  console.log(value);
  return (
    <>
      <Router>
        <Switch>
          <Context.Provider value={val}>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/main" component={Main} />
            <Route path="*" component={Restricted} />
          </Context.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
