import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/core";

import { useAuth } from "../context/useAuth";

export function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  return (
    <div>
      Login page
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        onClick={() => {
          login(username);
        }}
        variantColor="teal"
        size="xs"
      >
        Login
      </Button>
    </div>
  );
}
