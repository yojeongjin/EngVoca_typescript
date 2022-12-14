import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";

import SigninContainer from "../containers/SigninContainer";
import Home from "./Home";

export default function Signin() {
  const token = useSelector<RootState , string | null>((state) => state.auth.token)

  if (token !== null) {
   return <Home />
  }

  return <SigninContainer />
}