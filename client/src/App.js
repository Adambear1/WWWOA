import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Restricted from "./pages/Restricted";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/main" component={Main} />
            {/* <Route path="*" component={Restricted} /> */}
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
