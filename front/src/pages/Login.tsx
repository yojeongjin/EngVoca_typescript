import React from "react";

import SigninContainer from "../containers/SigninContainer";
import Home from "./Home";
import useUser from "../hooks/useUser";

export default function Signin() {
  const user = useUser()

  if (user !== null) {
   return <Home />
  }

  return <SigninContainer />
}