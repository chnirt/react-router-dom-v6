import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@chakra-ui/core";

import { useAuth } from "../context/useAuth";

export function Users() {
  const { logout } = useAuth();

  return (
    <Fragment>
      Users
      <Button onClick={logout} variantColor="teal" size="xs">
        Logout
      </Button>
      <Outlet />
    </Fragment>
  );
}
