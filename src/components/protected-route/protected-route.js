import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthed, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthed ? <Component {...props} /> : <Redirect to={redirectTo} />)}
  />
);

export default ProtectedRoute;
