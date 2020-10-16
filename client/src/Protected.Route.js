import React, { useContext } from "react";
import { Context } from "./components/Context";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { value, setValue } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(value);
        try {
          if (value.jwt.length > 1) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/Restricted",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        } catch (error) {
          console.log("No Value");
        }
      }}
    />
  );
};
