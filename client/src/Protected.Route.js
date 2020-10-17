import React, { useEffect, useState, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./Authenticate";
import { Context } from "./components/Context";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { value, setValue } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          console.log(auth.isAuthenticated());
          return auth.isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect to="/Restricted" />
          );
        } catch (error) {
          console.log("No Value");
        }
      }}
    />
  );
};
