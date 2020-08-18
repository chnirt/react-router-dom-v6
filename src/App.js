import React, { Suspense } from "react";
import "./styles.css";
import { Link, useRoutes } from "react-router-dom";

import {
  Login,
  Register,
  Users,
  UsersIndex,
  UserProfile,
  OwnUserProfile,
  NotFound
} from "./screens";
import { Loading } from "./components";
import { PublicRoute, PrivateRoute } from "./hepler";

export default function App() {
  // We removed the <BrowserRouter> element from App because the
  // useRoutes hook needs to be in the context of a <BrowserRouter>
  // element. This is a common pattern with React Router apps that
  // are rendered in different environments. To render an <App>,
  // you'll need to wrap it in your own <BrowserRouter> element.
  let element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: "/",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      )
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      )
    },
    {
      path: "users",
      element: (
        <PrivateRoute>
          <Users />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/",
          element: <UsersIndex />
        },
        { path: ":id", element: <UserProfile /> },
        { path: "me", element: <OwnUserProfile /> }
      ]
    },
    { path: "*", element: <NotFound /> }
  ]);

  return (
    <Suspense fallback={Loading}>
      <Link to="/">Login</Link>| <Link to="/register">Register</Link>|
      <Link to="/users">Users</Link>|<Link to="/users/123">UserProfile</Link>|
      <Link to="/users/me">OwnUserProfile</Link>
      {element}
    </Suspense>
  );
}
