// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext.jsx';

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const { user } = useAuth();
//   return user ? <Component {...rest} /> : <Navigate to="/signin" />;
// };

// export default PrivateRoute;
// privateroute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user ? Component : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;
